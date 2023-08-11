import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BoutiqueComponent} from './comps/boutique/boutique.component';
import {BuyerComponent} from './comps/buyer/buyer.component';
import {OwnerComponent} from './comps/owner/owner.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AboutComponent} from './comps/about/about.component';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import { DetailComponent } from './comps/detail/detail.component';

@NgModule({
  declarations: [
    // AppComponent,
    // BoutiqueComponent,
    // BuyerComponent,
    // OwnerComponent,
    // AboutComponent,
    // DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'}),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
