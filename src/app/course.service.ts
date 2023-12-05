import { Injectable } from '@angular/core';
import { Course } from './courses/courses.module';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: "os", title: "Operating Systems", requirements: "", description: "In the realm of computer science, the Operating Systems course forms the foundation for understanding the fundamental concepts that govern how a computer functions. We delve into the intricate details of managing system resources, process scheduling, memory management, and file systems. By the end of this course, you will have a profound understanding of the software that orchestrates the hardware, enabling you to comprehend the intricate dance of tasks within a computer system.", grading_system: "0.5+0.5" },
    { id: "oop", title: "Object Oriented Programming", requirements: "", description: "Object-Oriented Programming (OOP) is the backbone of modern software development, and this course serves as your gateway to mastering its principles. Dive into the world of classes, objects, inheritance, and polymorphism. Through practical coding exercises and real-world applications, you'll learn to design robust, scalable, and maintainable software solutions. By the end of this course, you'll be proficient in OOP and ready to tackle complex programming challenges with confidence.", grading_system: "0.5+0.5" },
    { id: "cloud", title: "Cloud Computing", requirements:"Throughout the semester", description: "Cloud Computing is a revolutionary paradigm that reshapes the way we conceive, deploy, and scale computing resources. This course immerses you in the concepts of virtualization, distributed computing, and cloud service models. Uncover the power of platforms like AWS, Azure, and Google Cloud as we explore the dynamic landscape of scalable, on-demand computing. By the end, you'll be equipped to harness the potential of the cloud for transformative technological solutions.", grading_system: "0.5+0.5" },
    { id: "db", title: "Databases", requirements:"", description: "Embark on a journey into the world of data management with the Databases course. In this exploration, we uncover the principles of designing, implementing, and maintaining databases. Learn how to structure data efficiently, query databases for valuable insights, and master the art of database normalization. By the conclusion of this course, you'll possess the skills to navigate the ever-expanding realm of data storage and retrieval.", grading_system: "0.5*E+0.5*P\nP is a presentation. E is the exam." },
    // { id: "db2", title: "Databases 2", description: "db stands for Databases2 as well", grading_system: "0.5+0.5" },
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
