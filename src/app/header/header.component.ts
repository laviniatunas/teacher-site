import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item">
      <img src="assets/img/cs-logo.png">
      </a>
    </div>

    <!--- menu --->
    <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" routerLink="/">Home</a>
        <a class="navbar-item" routerLink="/courses">Teaching</a>
        <a class="navbar-item" routerLink="/contact">Contact</a>
      </div>
    </div>
  </div>
  `,
  styles: ``
})
export class HeaderComponent {

}
