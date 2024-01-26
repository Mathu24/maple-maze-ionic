import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import {Router} from "@angular/router";
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})


export class CameraPage {
  imageSrc?: string;
  /*private router: any;*/

  constructor(private alertController: AlertController, private router: Router) {}

    async takePicture() {
    const alert = await this.alertController.create({
      header: 'Kamerazugriff',
      message: 'Möchten Sie der App Zugriff auf Ihre Kamera gewähren?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Zustimmen',
          handler: () => {
            this.captureImage();
          },
        },
      ],
    });

    await alert.present();
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    this.imageSrc = image.webPath;
  }

  nextButton() {
    this.router.navigate(['tabs/geolocation'])
  }

}
