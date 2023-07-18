import { Component, OnInit } from '@angular/core';
import { OperationsService } from "../../store/operations.service";
import { OrderItem } from "../../models/order-item.model";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  products!: Product[];
  order!: OrderItem[];
  earnings$ = this.store.earnings$;

  constructor(private store: OperationsService) {
  }

  ngOnInit(): void {
    this.products = this.store.products;
  }

  collectOrder(order: OrderItem[]) {
    this.order = order;
  }

  receivePayment(newPayment: number) {
    this.store.updatePayment(newPayment);
    this.store.updateSales(this.order);
    const products = this.products;
    this.products = [];
    setTimeout(() => {
      this.products = products;
    });
  }
}
