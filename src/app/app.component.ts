import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

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
