import {Component} from '@angular/core';
import { ShopService } from "../../store/shop.service";
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe, CurrencyPipe, NgIf} from '@angular/common';
import {BoutiqueComponent} from '../boutique/boutique.component';
import {BuyerComponent} from '../buyer/buyer.component';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    BoutiqueComponent,
    BuyerComponent,
    NgIf
  ],
  providers: [ShopService]
})
export class OwnerComponent {
  earnings$ = this.store.earnings$;

  constructor(private store: ShopService, private activeRoute: ActivatedRoute) {
  }

  getRouteParam = (key: string) => this.activeRoute.snapshot.params[key];

  newItems = this.getRouteParam('newItems')
}
