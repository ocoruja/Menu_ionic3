import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public games;

  constructor(public navCtrl: NavController) {
    this.games = [
      {name: 'Dota 2', current_players: '687083'},
      {name: 'Counter-Strike: Global Offensive', current_players: '529220'},
      {name: 'Grand Theft Auto V', current_players: '79653'},
      {name: 'H1Z1: King of the Kill', current_players: '73863'},
      {name: 'ARK: Survival Evolved', current_players: '62641'},
      {name: 'Team Fortress 2', current_players: '57808'},
      {name: 'Football Manager 2017', current_players: '52597'},
      {name: 'Warframe', current_players: '49844'},
      {name: 'Tom Clancy\'s Rainbow Six Siege', current_players: '47642'}
    ];

  }

}
