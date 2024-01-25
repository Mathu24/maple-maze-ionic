import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

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

@Component({
  selector: 'app-walk',
  templateUrl: './walk.page.html',
  styleUrls: ['./walk.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WalkPage implements OnInit, OnDestroy {
  totalDistance: number = 0;
  previousCoords: { latitude: number; longitude: number } | undefined;
  watchId: string | undefined;

  constructor() {}

  ngOnInit() {
    this.startTracking();
  }

  async startTracking() {
    try {
      const position = await Geolocation.getCurrentPosition();
      // @ts-ignore
      this.calculateDistance(position.coords);
      this.previousCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      // @ts-ignore
      this.watchId = Geolocation.watchPosition({}, (newPosition, err) => {
        if (err) {
          console.error('Error getting location', err);
          return;
        }

        if (newPosition && newPosition.coords) {
          // @ts-ignore
          this.calculateDistance(newPosition.coords);
          this.previousCoords = {
            latitude: newPosition.coords.latitude,
            longitude: newPosition.coords.longitude,
          };
        }
      });
    } catch (error) {
      console.error('Error getting initial location', error);
    }
  }

  calculateDistance(coords: GeolocationPosition['coords']) {
    if (this.previousCoords) {
      const distance = haversineDistance(this.previousCoords, {
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      this.totalDistance += distance;
    }
  }

  ngOnDestroy() {
    if (this.watchId) {
      Geolocation.clearWatch({ id: this.watchId });
    }
  }
}
