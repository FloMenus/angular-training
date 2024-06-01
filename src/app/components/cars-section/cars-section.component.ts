import { Component } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarsListComponent } from '../cars-list/cars-list.component';
import carsListData from '../../data/cars/carsList.json';
import { BoughtCarsListComponent } from '../bought-cars-list/bought-cars-list.component';

@Component({
  selector: 'app-cars-section',
  standalone: true,
  imports: [CarsListComponent, BoughtCarsListComponent],
  templateUrl: './cars-section.component.html',
  styleUrl: './cars-section.component.css',
})
export class CarsSectionComponent {
  cars: Car[];
  boughtCars: Car[];
  balance: number;

  constructor() {
    this.cars = carsListData.cars.map((carE) => {
      const newCar = new Car();
      newCar.title = carE.title;
      newCar.brand = carE.brand;
      newCar.description = carE.description;
      newCar.picture = carE.picture;
      newCar.price = carE.price;

      return newCar;
    });
    this.boughtCars = [];
    this.balance = 25000;
  }

  buyCar(car: Car) {
    if (this.balance >= car.price) {
      this.balance -= car.price;
      const boughtCarIndex = this.cars.findIndex((c) => c.title === car.title);
      if (boughtCarIndex !== -1) {
        this.cars[boughtCarIndex].isSold = true;
        this.boughtCars.push(this.cars[boughtCarIndex]);
        console.log(this.boughtCars);
      } else {
        alert("Erreur lors de l'achat de la voiture");
      }
    } else {
      alert('Pas assez de balance pour acheter cette voiture !');
    }
  }

  cancelBuyCar(car: Car) {
    const boughtCarIndex = this.boughtCars.findIndex(
      (c) => c.title === car.title
    );
    if (boughtCarIndex !== -1) {
      this.boughtCars[boughtCarIndex].isSold = false;
      this.balance += this.boughtCars[boughtCarIndex].price;
      this.boughtCars.splice(boughtCarIndex, 1);
    } else {
      alert("Erreur lors de l'annulation de l'achat de la voiture");
    }
  }
}
