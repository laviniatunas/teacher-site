import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        <h2 class="title is-4">Course Details</h2>
        <p><strong>ID:</strong> {{ course.id }}</p>
        <p><strong>Title:</strong> {{ course.title }}</p>
        <p><strong>Description:</strong> {{ course.description }}</p>
      </div>
    </div>
      </div> 
    </section>
  `,
  styles: ``
})
export class CourseSingleComponent {
  course = {} as Course;
  
  constructor(private router: ActivatedRoute){}

  ngOnInit(){
    this.router.params.subscribe(params => {
      const courseId = params['id']; //TODO
      this.course = this.getCourseById(courseId.toString());
    })
    
  }

  getCourseById(courseId: string): Course {
    // Replace this with actual data fetching logic (e.g., from a service)
    return { id: courseId, title: `Course ${courseId}`, description: `Description for Course ${courseId}.` };
  }
}
