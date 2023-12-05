import { Injectable } from '@angular/core';
import { Course } from './courses/courses.module';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: "os", title: "Operating Systems", description: "OS description", grading_system: "0.5+0.5" },
    { id: "oop", title: "Object Oriented Programming", description: "This description is meant for Object Oriented Programming. Welcome to the class!", grading_system: "0.5+0.5" },
    { id: "cloud", title: "Cloud Computing", description: "This is description for Cloud Computing class", grading_system: "0.5+0.5" },
    { id: "db", title: "Databases", description: "db stands for Databases", grading_system: "0.5+0.5" },
    { id: "db2", title: "Databases 2", description: "db stands for Databases2 as well", grading_system: "0.5+0.5" },
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
