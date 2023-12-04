import { Component } from '@angular/core';

@Component({
  selector: 'app-bio-cv',
  standalone: true,
  imports: [],
  template: `
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <div class="content">
              <h1 class="title is-2">Your Name</h1>
              <h2 class="subtitle is-4">Job Title</h2>
              <!-- Add more personal information as needed -->

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>

              <!-- Add more content as needed -->

              <a href="/assets/your-cv.pdf" download="TunasLaviniaCV.pdf" class="button is-primary">Download CV (PDF)</a>
            </div>
          </div>
          <div class="column is-6">
            <!-- Add an image or other relevant content here -->
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class BioCvComponent {

}
