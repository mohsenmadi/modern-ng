import {Component, OnDestroy, OnInit} from '@angular/core';
import { ShopService } from "../../store/shop.service";
import { OrderItem } from "../../models/order-item.model";
import { Product } from "../../models/product.model";
import {Observable, Subscription, take} from 'rxjs';

// TODO-07:
//   1. If you see Owner's HTML template, you realize it's the parent since
//      it summons Boutique and Buyer into action, hence, add
//      `ShopService` to the `providers` list in @Component
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit, OnDestroy {
  // TODO-08:
  //   Make Owner happy! He's only concerned with "earnings", so:
  //   1. ditch `products`; boutique component can get it's products from store
  //   2. ditch `order`; buyer component knows best how to get its order items
  //   3. yep, all owner needs to be concerned with is `earnings$` for growth n'all;
  //      using the selector you created in 6.2, make `earnings` here become
  //      `earnings$` and initialize it to that of the store's (and fix your template (...|async|...)
  //   4. Remember, every time you remove an @Input or an @Output from the
  //      children, clean up Owner's template accordingly
  //   5. Do you still need to implement OnInit?
  //   6. Do you still need to implement OnDestroy?

  products!: Product[];
  order!: OrderItem[];
  earnings$ = 0; // trailed with a $ for later...
  subscription = new Subscription();

  constructor(private store: ShopService) {
  }

  // TODO-09:
  //   1. Making Owner happy right? You know what to do about all the methods below
  ngOnInit(): void {
    this.products = this.store.products;
    this.subscription = this.store.earnings$
      .subscribe(earnings => this.earnings$ = earnings)
  }

  collectOrder(order: OrderItem[]) {
    this.order = order;
  }

  // take a quick look, but then ditch it
  receivePayment(paymentDue: number) {
    this.store.makePayment(paymentDue);
    this.store.updateSales(this.order);
    const products = this.products;
    // to rebuild table, the following purge of DOM and rebuild is needed
    this.products = [];
    setTimeout(() => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
