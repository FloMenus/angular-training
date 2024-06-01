import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car.model';
import { CommonModule } from '@angular/common';

import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule, CarCardComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css',
})
export class CarsListComponent {
  @Input({
    alias: 'carsList',
  })
  cars: Car[] = new Array<Car>();

  @Output() buyCar = new EventEmitter<Car>();
  onBuyCar(car: Car) {
    this.buyCar.emit(car);
  }
}
