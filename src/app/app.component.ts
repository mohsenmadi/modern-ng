import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {provideRouter, RouterLink, RouterOutlet, withEnabledBlockingInitialNavigation} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {routes} from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    MatListModule,
    RouterLink,
    MatIconModule,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'modern-ng';
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes, withEnabledBlockingInitialNavigation())
  ]
}).catch(err => console.error(err));
