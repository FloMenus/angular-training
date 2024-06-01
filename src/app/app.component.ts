import { Component } from '@angular/core';
import { CarsSectionComponent } from './components/cars-section/cars-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
