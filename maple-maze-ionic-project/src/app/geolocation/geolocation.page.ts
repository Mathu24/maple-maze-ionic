import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import {Router} from "@angular/router";


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class GeolocationPage implements OnInit  {
  distanceToTarget: number | null = null;

  constructor(private alertController: AlertController, private router: Router) {}
  nextButton() {
    this.router.navigate(['tabs/battery'])
  }


  ngOnInit(): void {
  }

  async printCurrentPosition() {
    try {
      const currentCoordinates = await Geolocation.getCurrentPosition();

      const targetCoordinates = {latitude: 47.071945403994924, longitude: 8.348885173299777};

      const distance = haversineDistance(
        {
          latitude: currentCoordinates.coords.latitude,
          longitude: currentCoordinates.coords.longitude,
        },
        targetCoordinates
      );

      console.log('Current position:', currentCoordinates);
      console.log('Distance to target:', distance.toFixed(2), 'meters');

      this.distanceToTarget = distance; // Setzen Sie die Distanz für die Anzeige im HTML
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }
}

export function haversineDistance(
  coords1: { latitude: number; longitude: number },
  coords2: { latitude: number; longitude: number },
) {
  const R = 6371e3; // Earth's radius in meters
  const lat1Rad = coords1.latitude * (Math.PI / 180);
  const lat2Rad = coords2.latitude * (Math.PI / 180);
  const deltaLat = (coords2.latitude - coords1.latitude) * (Math.PI / 180);
  const deltaLon = (coords2.longitude - coords1.longitude) * (Math.PI / 180);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1Rad) *
    Math.cos(lat2Rad) *
    Math.sin(deltaLon / 2) *
    Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance; // in meters

}
