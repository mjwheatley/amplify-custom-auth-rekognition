import { Component } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { AlertController } from '@ionic/angular';
import { SessionService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  services = {
    handleSignIn: this.handleSignIn.bind(this)
  };

  constructor(
    private alertCtrl: AlertController,
    private session: SessionService
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
          break;
        case 'signIn_failure':
          console.log('user sign in failed');
          break;
        case 'configured':
          console.log('the Auth module is configured');
      }
    });
  }

  private async handleSignIn(formData: Record<string, any>) {
    console.log(`handleSignIn() formData`, formData);
    let { username, password } = formData;
    return Auth.signIn({
      username,
      password
    }).then(async (session) => {
      console.log(`Auth.signIn() session`, session);
      if (
        session.authenticationFlowType === `CUSTOM_AUTH` &&
        session.challengeName === `CUSTOM_CHALLENGE` &&
        session.challengeParam.trigger
      ) {
        console.log(`question`, session.challengeParam.question);
        // return Auth.sendCustomChallengeAnswer(session, `nope`)
        //   .then(user => user)
        //   .catch((err) => {
        //     console.error(`Auth.sendCustomChallengeAnswer() error`, err);
        //     throw new Error(`Incorrect custom challenge answer`);
        //   });
        return new Promise(async (resolve, reject) => {
          const alert = await this.alertCtrl.create({
            header: `Challenge Question`,
            message: `${session.challengeParam.question}?`,
            inputs: [{
              placeholder: `Answer`,
              label: `Answer`,
              name: `answer`
            }],
            backdropDismiss: false,
            buttons: [{
              role: `cancel`,
              text: `Cancel`,
              handler: () => {
                reject(new Error(`Cancelled`));
              }
            }, {
              text: `Submit`,
              handler: async ({ answer }) => {
                console.log(`answer`, answer);
                Auth.sendCustomChallengeAnswer(session, answer)
                  .then(user => resolve(user))
                  .catch(err => reject(new Error(`Failed custom auth challenge`)));
              }
            }]
          });
          await alert.present();
        });

      } else {
        return session;
      }
    }).catch((error) => {
      console.log(`Auth.signIn() error`, error);
      throw error;
    });
  }
}
