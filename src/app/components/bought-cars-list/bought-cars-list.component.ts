import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../models/car.model';
import { BoughtCarLineComponent } from '../bought-car-line/bought-car-line.component';

@Component({
  selector: 'app-bought-cars-list',
  standalone: true,
  imports: [CommonModule, BoughtCarLineComponent],
  templateUrl: './bought-cars-list.component.html',
  styleUrl: './bought-cars-list.component.css',
})
export class BoughtCarsListComponent {
  @Input({
    alias: 'boughtCarsList',
  })
  boughtCars: Car[] = new Array<Car>();

  @Output() cancelBuyCar = new EventEmitter<Car>();
  onCancelBuyCar(car: Car) {
    this.cancelBuyCar.emit(car);
  }
}
