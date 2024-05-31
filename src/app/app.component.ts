import { Component } from '@angular/core';
import { Car } from './models/car.model';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import carsListData from './data/cars/carsList.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarCardComponent, CarsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  clio: Car;
  cars: Car[];

  constructor() {
    this.clio = new Car();
    this.clio.title = 'Clio 3';
    this.clio.description = 'This is a Renault Clio 3';

    this.cars = carsListData.cars.map((carE) => {
      const newCar = new Car();
      newCar.title = carE.title;
      newCar.brand = carE.brand;
      newCar.description = carE.description;

      return newCar;
    });
  }
}
