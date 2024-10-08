import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../../shared/components/ratings/ratings.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService],
})
export class ProductsComponent {
  products: ProductListItem[] = [];

  constructor(productService: ProductsService) {
    this.products = productService.getProductsList();
  }
}
