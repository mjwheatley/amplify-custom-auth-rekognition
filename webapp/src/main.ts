import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify, { Auth, Hub } from 'aws-amplify';
import aws_exports from './aws-exports';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

Amplify.configure(aws_exports);
Amplify.Logger.LOG_LEVEL = 'DEBUG';
Auth.configure({
  authenticationFlowType: 'CUSTOM_AUTH'
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

defineCustomElements(window).then(() => {
});
