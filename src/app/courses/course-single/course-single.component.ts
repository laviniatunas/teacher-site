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
      <div class="container">
      <div class="card">
      <div class="card-content">
        <h2 class="title is-4">{{ course?.title }}</h2>
        <p><strong>Description:</strong> {{ course?.description }}</p>
        <p><strong>Grading System:</strong> {{ course?.grading_system }}</p>
      </div>
    </div>
      </div> 
    </section>
  `,
  styles: ``
})
export class CourseSingleComponent {
  course = {} as Course | undefined;
  
  constructor(private router: ActivatedRoute, private courseService: CourseService){}

  ngOnInit(){
    this.router.params.subscribe(params => {
      const courseId = params['id']; 
      this.course = this.courseService.getCourseById(courseId);
    })
  }

}
