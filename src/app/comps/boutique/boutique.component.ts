import { Component } from '@angular/core';
import { Product } from "../../models/product.model";
import { ShopService } from "../../store/shop.service";

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
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
