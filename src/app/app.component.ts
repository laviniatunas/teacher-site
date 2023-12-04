import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, ContactComponent, FormsModule],
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'awd-project';
}
