import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() buyCar = new EventEmitter<Car>();
  onBuyCar() {
    this.buyCar.emit(this.car);
  }
}
