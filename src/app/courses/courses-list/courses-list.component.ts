import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Course } from '../courses.module';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../course.service';

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
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
