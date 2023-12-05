import { Injectable } from '@angular/core';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: "os", title: "Operating Systems", description: "OS description", grading_system: "0.5+0.5" },
    { id: "oop", title: "Object Oriented Programming", description: "This is description for Object Oriented Programming", grading_system: "0.5+0.5" },
    { id: "cloud", title: "Cloud Computing", description: "This is description for Cloud Computing", grading_system: "0.5+0.5" },
    { id: "db", title: "Databases", description: "de for Databases", grading_system: "0.5+0.5" },
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
