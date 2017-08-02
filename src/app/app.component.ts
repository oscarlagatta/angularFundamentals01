import { Component } from '@angular/core';


interface  Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <nav class="nav">
        <a *ngFor="let item of nav" 
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.name }}
        </a>
      </nav>
      <router-outlet></router-outlet>
      <!-- passenger-viewer></passenger-viewer -->
    </div>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
   
  ]

}
