import {Component, OnInit} from '@angular/core';
import { ShopService } from "../../store/shop.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
  providers: [ShopService]
})
export class OwnerComponent implements OnInit {
  earnings$ = this.store.earnings$;

  constructor(private store: ShopService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('=shop=>', this.newItems);
  }

  getRouteParam = (key: string) => this.activeRoute.snapshot.params[key];

  newItems = this.getRouteParam('newItems')
}
