import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css',
})
export class CarCardComponent {
  @Input({
    alias: 'car',
  })
  car: Car = new Car();

  sellCar() {
    this.car.isSold = true;
  }
}
