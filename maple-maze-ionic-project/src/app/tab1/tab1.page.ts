import {Component, inject} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonButton,
  ],
})
export class Tab1Page {
  router = inject(Router);
  constructor(/*private router: Router*/) {}

  async navigateToCamera() {
    // localhost:8100/tabs/camera
    await this.router.navigate(['tabs', 'camera']);
  }
}
