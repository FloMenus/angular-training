import { Routes } from '@angular/router';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cars', component: CarsPageComponent },
  { path: '**', redirectTo: '' },
];
