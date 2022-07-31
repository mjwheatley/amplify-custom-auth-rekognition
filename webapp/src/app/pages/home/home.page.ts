import { Component, NgZone, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from '../../services';
import { Auth, Storage } from 'aws-amplify';
import { APIService, GetUserInfoQuery } from '../../API.service';
import { FacialRekognitionModalComponent } from '../../modals';
import { ModalController } from '@ionic/angular';

interface StoragePutResponse {
  key: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public userInfo: GetUserInfoQuery;
  public signedURL: string;
  public user: any;
  private userSub: Subscription;

  constructor(
    private zone: NgZone,
    private session: SessionService,
    private apiService: APIService,
    private modalCtrl: ModalController
  ) {
  }

  async ngOnInit() {
    await this.subscribeToUser();
    console.log(`ngOnInit() user`, this.user);
  }

  async signOut() {
    await Auth.signOut();
  }

  async enrollFace() {
    const event: any = await this.openFacialRekognitionModal();
    if (event?.data?.imageUri) {
      // create ddb entry first
      const filename = `regimages/${this.user.sub}.jpg`;
      const userInfo = {
        companyid: 'Amazon',
        userid: this.user.sub,
        firstname: this.user.given_name,
        lastname: this.user.family_name,
        dob: new Date().toISOString().split(`T`)[0],
        registrationstatus: 'error-initialentry',
        faceimage: filename
      };
      const createUserResponse = await this.apiService.CreateUserInfo(userInfo);
      console.log(`createUserResponse`, createUserResponse);

      // then store image in s3 bucket
      let imageData = await fetch(event.data.imageUri);
      let blob = await imageData.blob();
      const storageResponse = await Storage.put(filename,
        blob, {
          contentType: 'image/jpeg',
          progressCallback(progress: any) {
            console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          }
        }) as StoragePutResponse;

      if (storageResponse && storageResponse.key) {
        // call api to run through idv new user registration flow.
        // see lambda function idvworkflowfn for more details
        const variables = { userInfoAsJson: JSON.stringify(userInfo) };
        const registerUserResponse = await this.apiService.Registernewuser(variables.userInfoAsJson);
        console.log(registerUserResponse);
        if (!registerUserResponse.Success) {
          // cleanup
          console.log('Cleaning up incomplete user registration...');
          const variables = { userInfoAsJson: JSON.stringify(userInfo) };
          const deleteUserResponse = await this.apiService.Deleteuser(variables.userInfoAsJson);
          console.log('Done cleaning up incomplete user registration', deleteUserResponse);
        } else {
          console.log(`Successfully enrolled for facial rekognition`);
          await this.getUserInfo();
        }
      }
    } else {
      console.log(`image not captured`);
    }
  }

  async unenrollFace() {
    const variables = { userInfoAsJson: JSON.stringify(this.userInfo) };
    const deleteUserResponse = await this.apiService.Deleteuser(variables.userInfoAsJson);
    console.log(`deleteUserResponse`, deleteUserResponse);
    await this.getUserInfo();
  }

  private async subscribeToUser() {
    this.user = this.session.getUser();
    if (this.user.sub) {
      await this.getUserInfo();
    }
    this.userSub = this.session.getUserAsObservable().subscribe(async (user: any) => {
      await this.zone.run(async () => {
        this.user = user;
        console.log(`HomePage.subscribeToUser() user`, this.user);
        if (!this.userInfo) {
          await this.getUserInfo();
        }
      });
    });
  }

  private async getUserInfo() {
    console.log(`getUserInfo()`);
    this.userInfo = await this.apiService.GetUserInfo(`Amazon`, this.user.sub);
    console.log(`userInfo`, this.userInfo);
    let signedURL = ``;
    if (this.userInfo?.faceimage) {
      signedURL = await Storage.get(this.userInfo.faceimage.replace("public/", "")) as string;
    }
    this.signedURL = signedURL;
  }

  private async openFacialRekognitionModal() {
    return new Promise(async (resolve) => {
      const modal: HTMLIonModalElement = await this.modalCtrl.create({
        component: FacialRekognitionModalComponent,
        backdropDismiss: false
      });
      modal.onDidDismiss().then((event) => {
        resolve(event);
      });
      await modal.present();
    });
  }
}
