import {Component, OnDestroy, OnInit} from '@angular/core';
import {OperationsService} from '../../store/operations.service';
import {OrderItem} from '../../models/order-item.model';
import {Product} from '../../models/product.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit, OnDestroy {
  products!: Product[];
  order!: OrderItem[];
  earnings = 0;
  subscription = new Subscription();

  constructor(private store: OperationsService) {
  }

  ngOnInit(): void {
    this.products = this.store.products;
    this.subscription = this.store.earnings$
      .subscribe(earnings => this.earnings = earnings);
  }

  collectOrder(order: OrderItem[]) {
    this.order = order;
  }

  receivePayment(newPayment: number) {
    this.store.makePayment(newPayment);
    this.store.updateSales(this.order);
    const products = this.products;
    this.products = [];
    setTimeout(() => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
