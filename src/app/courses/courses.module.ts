import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }

export interface Course{
  id: string;
  title: string;
  description: string;
  requirements: string;
  grading_system: string;
}