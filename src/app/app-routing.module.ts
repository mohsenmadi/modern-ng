import {Routes} from '@angular/router';
import {HomeComponent} from './comps/home/home.component';
import {OwnerComponent} from './comps/owner/owner.component';
import {DetailComponent} from './comps/detail/detail.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'shop/:newItems',
    component: OwnerComponent,
    children: [
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ]
  },
  {
    path: '**', redirectTo: '/'
  }
];
