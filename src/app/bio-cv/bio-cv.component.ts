import { Component } from '@angular/core';

@Component({
  selector: 'app-bio-cv',
  standalone: true,
  imports: [],
  template: `
    <section class="section">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <div class="content">
              <h1 class="title is-2">Țunaș Lavinia</h1>
              <h2 class="subtitle is-4">Assistant Professor of Computer Science</h2>

              <div class="card">
                <div class="card-content">
                Hello, I'm Dr. Țunaș Lavinia, and I am thrilled to welcome you to the dynamic world of computer science! As an Assistant Professor specializing in Object-Oriented Programming (OOP), Databases, Cloud Computing, and Operating Systems, I am passionate about equipping students with the knowledge and skills needed to navigate the ever-evolving landscape of technology.
                </div>
                <div class="card-content">
                  <p><strong>Courses Offered</strong></p>
                  <ul class="list">
                  <li class="list-item">Object Oriented Programming</li>
                  <li class="list-item">Cloud Computing</li>
                  <li class="list-item">Operating Systems</li>
                  <li class="list-item">Databases</li>
                  <!-- Add more list items as needed -->
                </ul>
                  <p><a routerLink="/courses">For more details check the courses page</a></p>

                </div>
              </div>

              <a href="/assets/your-cv.pdf" download="TunasLaviniaCV.pdf" class="button is-primary" style="margin-top: 1rem;">Download CV (PDF)</a>
            </div>
          </div>
          <div class="column is-6">
            <!-- Add an image or other relevant content here -->
          </div>
        </div>
      </div>
    </div>
    </section>
  `,
  styleUrls: ['bio-cv.component.scss'],
})
export class BioCvComponent {

}