import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-turnaround',
  templateUrl: './turnaround.page.html',
  styleUrls: ['./turnaround.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TurnaroundPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
