import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CameraPage{
  imageSrc?: string
 takePicture = async () => {
   const image = await Camera.getPhoto({
     quality: 90,
     allowEditing: false,
     resultType: CameraResultType.Uri
   });
   this.imageSrc = image.webPath
 }

}
