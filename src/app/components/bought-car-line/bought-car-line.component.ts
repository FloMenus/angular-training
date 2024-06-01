import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-bought-car-line',
  standalone: true,
  imports: [],
  templateUrl: './bought-car-line.component.html',
  styleUrl: './bought-car-line.component.css',
})
export class BoughtCarLineComponent {
  @Input({
    alias: 'boughtCar',
  })
  boughtCar: Car = new Car();

  @Output() cancelBuyCar = new EventEmitter<Car>();
  onCancelBuyCar() {
    this.cancelBuyCar.emit(this.boughtCar);
  }
}
