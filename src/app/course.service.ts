import { Injectable } from '@angular/core';
import { Course } from './courses/courses.module';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { 
      id: "os", 
      title: "Operating Systems", 
      requirements: "In order to pass this class, students will need 90% presence at the laboratories,  take the mid-term exam(M) and take the final exam(E) in normal session. Both exams will be taken on computers on-site. More details will be provided in the first lecture. Please join the courses' MS Teams with the following code: os-code.", 
      description: "In the realm of computer science, the Operating Systems course forms the foundation for understanding the fundamental concepts that govern how a computer functions. We delve into the intricate details of managing system resources, process scheduling, memory management, and file systems. By the end of this course, you will have a profound understanding of the software that orchestrates the hardware, enabling you to comprehend the intricate dance of tasks within a computer system.", 
      grading_system: "50% * M(>=5) + 50% * E(>=5)" 
    },
    { 
      id: "oop", 
      title: "Object Oriented Programming", 
      requirements: "Students will build troughout the semester a GUI application in C++ with assignments each week. Presence at laboratories is mandatory! In order to pass this course a final grade of 5 will be needed. Join the MS Team with the following code: oop-code", 
      description: "Object-Oriented Programming (OOP) is the backbone of modern software development, and this course serves as your gateway to mastering its principles. Dive into the world of classes, objects, inheritance, and polymorphism. Through practical coding exercises and real-world applications, you'll learn to design robust, scalable, and maintainable software solutions. By the end of this course, you'll be proficient in OOP and ready to tackle complex programming challenges with confidence.", 
      grading_system: "30% * Laboratories Grades (L) + 30% * Written exam in normal session (E) + 40% Practical exam in the normal session (P)." 
    },
    { 
      id: "cloud", 
      title: "Cloud Computing", 
      requirements:"Throughout the semester students will have to develop a basic application using REST services and then deploy it on one of the platforms. Laboratory attendance has to be over 70%. In the laboratories show of progress is expected.", 
      description: "Cloud Computing is a revolutionary paradigm that reshapes the way we conceive, deploy, and scale computing resources. This course immerses you in the concepts of virtualization, distributed computing, and cloud service models. Uncover the power of platforms like AWS, Azure, and Google Cloud as we explore the dynamic landscape of scalable, on-demand computing. By the end, you'll be equipped to harness the potential of the cloud for transformative technological solutions.", 
      grading_system: "100% Individual Project" 
    },
    { 
      id: "db", 
      title: "Databases", 
      requirements: "To successfully complete this course, students are required to attend a minimum of 80% of the laboratory classes. Additionally, students must submit all laboratory assignments and turn them in in time. The final grade will also be based on the successful completion of a comprehensive exam in the normal session.",
      description: "Embark on a journey into the world of data management with the Databases course. In this exploration, we uncover the principles of designing, implementing, and maintaining databases. Learn how to structure data efficiently, query databases for valuable insights, and master the art of database normalization. By the conclusion of this course, you'll possess the skills to navigate the ever-expanding realm of data storage and retrieval.", 
      grading_system: "50% Laboratories work (L) + 50% Exam in the normal session (E, needs to be >=5)" 
    },
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}
