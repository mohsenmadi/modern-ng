import {Routes} from '@angular/router';
import {AboutComponent} from './comps/about/about.component';
import {OwnerComponent} from './comps/owner/owner.component';

export const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'shop', component: OwnerComponent},
  {path: '**', redirectTo: '/'},
];
