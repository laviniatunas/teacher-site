import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="section">
    <div class="container">

      <div class="columns is-multiline" *ngIf="courses">
        <div class="column is-12" *ngFor="let course of courses; let i = index">

          <div class="card" ngClass="getColorClass(i)">
            <div class="card-content has-text-centered">
              {{ course }}
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
  `,
  styles: `
  .card {
    background-color: #ffc;
  }
  `
})
export class CoursesListComponent {
  courses: string[] = ["Operating Systems", "Databases", "Cloud Computing", "Object Oriented Programming"];

  getColorClass(index: number): string {
    const colors = ['is-primary', 'is-link', 'is-info', 'is-success', 'is-warning', 'is-danger'];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  }
}
