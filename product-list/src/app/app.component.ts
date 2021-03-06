import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '../assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99),
      new Product(
        'MYSHOES',
        'Black Runnig Shoes',
        '../assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '../assets/images/products/blue-jacket.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
