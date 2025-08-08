import { Routes } from '@angular/router';
import {HomeComponent} from './components/templates/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadComponent: () => import('./components/templates/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./components/templates/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./components/templates/pricing/pricing.component').then(m => m.PricingComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/templates/contact/contact.component').then(m => m.ContactComponent)
  }
];
