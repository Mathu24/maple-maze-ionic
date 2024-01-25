import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-battery',
  templateUrl: './battery.page.html',
  styleUrls: ['./battery.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class BatteryPage {
  isCharging: boolean | undefined;
  batteryLevel: number | undefined;
  private Battery: any;

  constructor(private alertController: AlertController, private router: Router) {}
  nextButton() {
    this.router.navigate(['tabs/walk'])
  }

  async checkBatteryStatus() {
    const [batteryStatus] = await Promise.all([this.Battery.getStatus()]);
    this.isCharging = batteryStatus.isCharging;
    this.batteryLevel = batteryStatus.level;
  }
}

