import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Course } from '../courses.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="section">
    <div class="container">

      <div class="columns is-multiline" *ngIf="courses">
        <div class="column is-12" *ngFor="let course of courses; let i = index">

          <div class="card" ngClass="getColorClass(i)">
            <div class="card-content has-text-centered">
              <a routerLink="/courses/{{course.id}}">
                {{ course.title }}
              </a>
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
  courses: Course[] = [
    {id: "os", title:"Operating Systems", description: "Description for OS"},
    {id: "oop", title:"Object Oriented Programming", description: "Description for Object Oriented Programming"},
    {id: "cloud", title:"Cloud Computing", description: "Description for Cloud Computin"},
    {id: "db", title:"Databases", description: "Description for Databases"},
  ]

}
