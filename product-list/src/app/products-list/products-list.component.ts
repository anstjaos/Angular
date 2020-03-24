import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() productList: Product[];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProductSelected: EventEmitter<Product>;
  constructor() { }
}
