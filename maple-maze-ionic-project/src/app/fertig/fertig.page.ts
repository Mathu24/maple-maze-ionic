import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fertig',
  templateUrl: './fertig.page.html',
  styleUrls: ['./fertig.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FertigPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) {}
  openLeaderboard() {
    this.router.navigate(['tabs/leaderboard'])
  }

  homeButton() {
    this.router.navigate(['tabs/tab1'])
  }

  ngOnInit() {
  }

}
