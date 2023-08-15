import { Component } from '@angular/core';
import { ShopService } from "../../store/shop.service";
import {MatTableModule} from '@angular/material/table';
import {AsyncPipe, CurrencyPipe, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss'],
  imports: [
    AsyncPipe,
    CurrencyPipe,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgIf
  ],
  standalone: true
})
export class BuyerComponent {
  paymentDue$ = this.store.paymentDue$;

  dataSource = this.store.order$;
  displayedColumns: string[] = ['name', 'cost', 'quantity', 'due'];

  constructor(private store: ShopService) {
  }

  makePayment() {
    this.store.makePayment();
  }
}
