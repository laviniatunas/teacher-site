import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
<section class="hero is-primary is-bold is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Welcome on my Page!
      </h1>
      <div class="columns is-mobile is-centered is-vcentered">
        <div class="column">
          <img src="/assets/img/me.jpg" alt="Description of the image">
        </div>
        <div class="column">
          <p>Introduction text TBD</p>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
  .hero {
    background-image: url('/assets/img/home-page.jpg')!important;
    background-size: cover;
    background-position: center center;
  }
  `]
})
export class HomeComponent {

}
