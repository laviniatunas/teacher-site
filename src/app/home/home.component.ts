import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered bg-gray p-5 home-container"> 
          <h1 class="title">
            Welcome on my Page!
          </h1>
          <div class="columns is-mobile is-centered is-vcentered">
            <div class="column home-image">
              <img src="/assets/img/me.jpg" alt="Description of the image">
            </div>
            <div class="column home-text">
              <p class="is-size-6 has-text-centered">
                Hello there! I'm Ms. Țunaș Lavinia, your assistant teacher at the Faculty of Mathematics and Computer Science, Babeș-Bolyai University in Cluj-Napoca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {

}
