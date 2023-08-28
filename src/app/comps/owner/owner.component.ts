import {Component, inject} from '@angular/core';
import { ShopService } from "../../store/shop.service";
import {AsyncPipe, CurrencyPipe, NgIf} from '@angular/common';
import {BoutiqueComponent} from '../boutique/boutique.component';
import {BuyerComponent} from '../buyer/buyer.component';
import {getRouteParam} from '../../utils/utils';

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
  earnings$ = inject(ShopService).earnings$;
  newItems = getRouteParam('newItems')
}
