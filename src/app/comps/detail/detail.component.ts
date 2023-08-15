import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShopService} from '../../store/shop.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productSelected$ = this.store.productSelected$;

  constructor(private activeRoute: ActivatedRoute, private store: ShopService) {
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
        this.store.productSelectedUpdate(Number(this.getRouteParam('id')));
      }
    );
  }

  getRouteParam = (key: string) => this.activeRoute.snapshot.params[key];
}
