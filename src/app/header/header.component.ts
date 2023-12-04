import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="/">
          <img src="assets/img/cs-logo.png" alt="UBB Computer Science Logo">
        </a>
        <!-- Burger icon for mobile -->
        <a role="button" class="navbar-burger burger" aria-label="menu" (click)="toggleNavbar()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!--- menu --->
      <div class="navbar-menu" [ngClass]="{ 'is-active': isNavbarActive }">
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
  isNavbarActive = false;

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }
}
