import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered bg-gray p-5"> 
          <h1 class="title">
            Welcome on my Page!
          </h1>
          <div class="columns is-mobile is-centered is-vcentered">
            <div class="column">
              <img src="/assets/img/me.jpg" alt="Description of the image">
            </div>
            <div class="column">
              <p class="is-size-5"><strong>Hello there! I'm Ms. Țunaș Lavinia, your assistant teacher at the Faculty of Mathematics and Computer Science, Babeș-Bolyai University in Cluj-Napoca. I will be your guide on this educational journey. Within these virtual walls, we'll explore the exciting world of Computer Science.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'] // Use styleUrls instead of stylesUrls
})
export class HomeComponent {

}
