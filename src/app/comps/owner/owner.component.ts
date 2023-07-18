import { Component } from '@angular/core';
import { ShopService } from "../../store/shop.service";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
  providers: [ShopService]
})
export class OwnerComponent {
  earnings$ = this.store.earnings$;

  constructor(private store: ShopService) {
  }
}
