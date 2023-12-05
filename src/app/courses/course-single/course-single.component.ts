import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../course.service';
import { Course } from '../courses.module'

@Component({
  selector: 'app-course-single',
  standalone: true,
  imports: [],
  template: `
    <section class="section">
      <div class="container full-height">
        <div class="card">
          <div class="card-content has-background-info" >
            <h2 class="title is-3">{{ course?.title }}</h2>
          </div>
          <div class="card-content has-background-light">
            <h1 class="title is-4">Description:</h1>
            <p>{{ course?.description }}</p>
          </div>
          <div class="card-content has-background-light">
            <h1 class="title is-4">Requirements & Graded Work:</h1>
            <p [innerHTML]=course?.requirements ></p>
          </div>
          <div class="card-content has-background-light">
            <h1 class="title is-4">Grading System:</h1>
            <p [innerHTML]=course?.grading_system ></p>
          </div>
        </div>
      </div> 
    </section>
  `,
  styleUrls: ['./courses-single.component.scss']
})
export class CourseSingleComponent implements OnInit {
  course = {} as Course | undefined;
  
  constructor(private router: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const courseId = params['id']; 
      this.course = this.courseService.getCourseById(courseId);
    });
  }
}
