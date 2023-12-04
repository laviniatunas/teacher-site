import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSingleComponent } from './course-single/course-single.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  },
  {
    path: ':id',
    component: CourseSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
