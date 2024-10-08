import { Component } from '@angular/core';
import { HeaderComponent } from '../home/components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { RatingsComponent } from '../shared/components/ratings/ratings.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
    RatingsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
