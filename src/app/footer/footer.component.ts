import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer has-background-black">
      <div class="container content has-text-centered has-text-white">
        <p> Get in touch! 
          Email: <a href="mailto:lavinia.tunas&#64;stud.ubbcluj.ro">lavinia.tunas&#64;stud.ubbcluj.ro</a> |
          LinkedIn: <a href="https://www.linkedin.com/in/lavinia-tunas/" target="_blank">My LinkedIn Profile</a>
        </p>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
