import {Injectable} from '@angular/core';
import {Product, updateSoldProperty} from '../models/product.model';
import {OrderItem} from '../models/order-item.model';
import {BehaviorSubject, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  earnings$ = new BehaviorSubject(0);

  products: Product[] = [
    {id: 10, sold: 0, name: 'Beach ball', cost: 14},
    {id: 20, sold: 0, name: 'Towel', cost: 5},
    {id: 30, sold: 0, name: 'Frisbee', cost: 2},
    {id: 40, sold: 0, name: 'Sunscreen', cost: 4},
    {id: 50, sold: 0, name: 'Cooler', cost: 25},
    {id: 60, sold: 0, name: 'Swim suit', cost: 15}
  ];

  makePayment = (newPayment: number) => {
    this.earnings$.pipe(take(1)).subscribe(earnings => {
      this.earnings$.next(earnings + newPayment);
    });
  };

  updateSales(order: OrderItem[]) {
    updateSoldProperty(this.products, order);
  }
}
