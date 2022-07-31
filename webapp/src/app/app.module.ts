import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { SessionService } from './services';
import { Storage } from '@ionic/storage';
import { FacialRekognitionModalComponent } from './modals';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    FacialRekognitionModalComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    WebcamModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    Storage,
    SessionService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
