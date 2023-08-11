import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';
import {routes} from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes, withEnabledBlockingInitialNavigation())
  ]
}).catch(err => console.error(err))
