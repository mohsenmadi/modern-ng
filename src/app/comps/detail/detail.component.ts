import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShopService} from '../../store/shop.service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {getRouteParam} from '../../utils/utils';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  standalone: true
})
export class DetailComponent {

  activeRoute = inject(ActivatedRoute);
  store = inject(ShopService);

  constructor() {
    this.activeRoute.paramMap.subscribe(params => {
        this.store
          .productSelectedUpdate(Number(getRouteParam('id', this.activeRoute)));
      }
    );
  }

  productSelected$ = this.store.productSelected$;
}
