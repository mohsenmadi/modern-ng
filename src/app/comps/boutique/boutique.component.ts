import { Component } from '@angular/core';
import { Product } from "../../models/product.model";
import { ShopService } from "../../store/shop.service";
import {MatTableModule} from '@angular/material/table';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CurrencyPipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss'],
  imports: [
    MatTableModule,
    RouterLink,
    CurrencyPipe,
    MatInputModule,
    RouterOutlet
  ],
  standalone: true
})
export class BoutiqueComponent {
  dataSource = this.store.products$;
  displayedColumns: string[] = ['sold', 'name', 'cost', 'quantity'];

  constructor(private store: ShopService) {
  }

  addOrderItem(quantity: number, product: Product) {
    this.store.addOrderItem(quantity, product);
  }
}
