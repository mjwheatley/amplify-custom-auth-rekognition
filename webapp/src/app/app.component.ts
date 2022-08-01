import { Component, OnInit } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { AlertController, ModalController } from '@ionic/angular';
import { SessionService } from './services';
import { FacialRekognitionModalComponent } from './modals';
import { FileUtil } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public services = {
    handleSignIn: this.handleSignIn.bind(this)
  };

  public formFields = {
    signIn: {
      username: {
        labelHidden: false,
        placeholder: 'Enter your email address',
        isRequired: true,
        label: 'Email'
      },
      password: {
        labelHidden: false,
        placeholder: 'Enter your password',
        isRequired: true,
        label: 'Password'
      }
    },
    signUp: {
      email: {
        order:1,
        labelHidden: false,
        placeholder: 'Enter your email address',
        isRequired: true,
        label: 'Email'
      },
      given_name: {
        order: 2,
        labelHidden: false,
        placeholder: 'Enter your given name',
        isRequired: true,
        label: 'First Name'
      },
      family_name: {
        order: 3,
        labelHidden: false,
        placeholder: 'Enter your family name',
        isRequired: true,
        label: 'Last Name'
      },
      password: {
        order: 5,
        labelHidden: false,
        placeholder: 'Create your password',
        isRequired: true,
        label: 'Password'
      },
      confirm_password: {
        order: 6,
        labelHidden: false,
        placeholder: 'Confirm your password',
        isRequired: true,
        label: 'Confirm Password'
      }
    }
  };

  private MAX_FILE_SIZE: number = 102400;
  private IMAGE_URI_PREFIX: string = `data:image/jpeg;base64,`;

  constructor(
    private alertCtrl: AlertController,
    private session: SessionService,
    private modalCtrl: ModalController
  ) {
    Hub.listen('auth', async (data) => {
      console.log(`Amplify Auth Hub event`, data.payload.event);
      switch (data.payload.event) {
        case 'signIn':
          console.log('user signed in');
          const user = data.payload.data.attributes;
          await this.session.updateUser(user);
          break;
        case 'signUp':
          console.log('user signed up');
          break;
        case 'signOut':
          console.log('user signed out');
          await this.session.updateUser({});
          break;
        case 'signIn_failure':
          console.log('user sign in failed');
          break;
        case 'configured':
          console.log('the Auth module is configured');
      }
    });
  }

  async ngOnInit() {
    // await this.openFacialRekognitionModal();
  }

  private async handleSignIn(formData: Record<string, any>) {
    console.log(`handleSignIn()`);
    let { username, password } = formData;
    return Auth.signIn({
      username,
      password
    }).then(async (session) => {
      console.log(`Auth.signIn() session`, session);
      if (
        session.authenticationFlowType === `CUSTOM_AUTH` &&
        session.challengeName === `CUSTOM_CHALLENGE` &&
        !!Number(session.challengeParam.trigger)
      ) {
        console.log(`trigger custom auth`);
        return new Promise(async (resolve, reject) => {
          const onDismiss = async (event) => {
            console.log(`openFacialRekognitionModal() onDismiss`, event);
            if (event?.data?.imageUri) {
              const imageUri = await this.processImageUri(event.data.imageUri);
              const base64ImageData = imageUri.replace(this.IMAGE_URI_PREFIX, ``);
              Auth.sendCustomChallengeAnswer(session, base64ImageData)
                .then(user => resolve(user))
                .catch((err) => {
                  console.error(`Auth.sendCustomChallengeAnswer() error`, err);
                  reject(new Error(`Failed custom auth challenge`));
                });
            } else {
              console.log(`image not captured`);
              reject(new Error(`Image not captured`));
            }
          };

          const event: any = await this.openFacialRekognitionModal();
          await onDismiss(event);
        });
      } else {
        return session;
      }
    }).catch((error) => {
      console.log(`Auth.signIn() error`, error);
      throw error;
    });
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

  private async processImageUri(imageUri: string): Promise<string> {
    console.log(`processImageUri()`);
    let file: File = FileUtil.dataUriToFile(imageUri, 'tmpImg.jpg');
    if (file) {
      if (file.size > this.MAX_FILE_SIZE) {
        console.log('File size too large, reducing image quality');
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const newImageUri = this.reduceImageQuality(img);
            resolve(this.processImageUri(newImageUri));
          };
          img.onerror = (error) => {
            console.error(`Error loading image`, error);
          };
          img.src = imageUri;
        });
      } else {
        return imageUri;
      }
    } else {
      throw new Error(`Invalid image schema`);
    }
  }

  private reduceImageQuality(image: HTMLImageElement): string {
    console.log('reduceImageQuality()');
    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d');
    canvas.width = image.width * 0.75;
    canvas.height = image.height * 0.75;
    canvasContext?.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.5);
  }
}
