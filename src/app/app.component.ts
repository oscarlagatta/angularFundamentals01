import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <nav class="nav">
        <a routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }">
          Home
        </a>
        <a routerLink="/oops"
          routerLinkActive="active">
          404
        </a>
      </nav>
      <router-outlet></router-outlet>
      <!-- passenger-viewer></passenger-viewer -->
    </div>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {}
