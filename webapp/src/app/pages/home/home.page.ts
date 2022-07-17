import { Component, NgZone, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from '../../services';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public user: any;
  private userSub: Subscription;

  constructor(
    private zone: NgZone,
    private session: SessionService
  ) {
  }

  async ngOnInit() {
    await this.subscribeToUser();
    console.log(`ngOnInit() user`, this.user);
  }

  private subscribeToUser() {
    this.user = this.session.getUser();
    this.userSub = this.session.getUserAsObservable().subscribe(async (user: any) => {
      await this.zone.run(async () => {
        this.user = user;
        console.log(`HomePage.subscribeToUser() user`, this.user);
      });
    });
  }

  async signOut() {
    await Auth.signOut();
  }
}
