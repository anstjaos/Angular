import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent{
  @Input() product: Product;
}
