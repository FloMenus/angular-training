import { Component } from '@angular/core';
import { CarsSectionComponent } from '../../components/cars-section/cars-section.component';

@Component({
  selector: 'app-cars-page',
  standalone: true,
  imports: [CarsSectionComponent],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.css',
})
export class CarsPageComponent {}
