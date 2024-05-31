export class Car {
  title = 'Car Card';
  brand = 'Car Brand';
  description = 'This is a car card component';
  isSold = false;

  public sellCar() {
    this.isSold = true;
  }
}
