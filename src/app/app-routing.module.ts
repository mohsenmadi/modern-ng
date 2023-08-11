import {Routes} from '@angular/router';
import {AboutComponent} from './comps/about/about.component';
import {OwnerComponent} from './comps/owner/owner.component';
import {DetailComponent} from './comps/detail/detail.component';

export const routes: Routes = [
  {
    path: '', component: AboutComponent
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
