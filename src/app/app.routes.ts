import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BioCvComponent } from './bio-cv/bio-cv.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
    },
    {
        path: 'about-me',
        component: BioCvComponent
    }
];
