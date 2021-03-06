import { from } from 'rxjs';
import { Component, TemplateRef } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
   selector:'courses',//<courses></courses>
   template: `
      <h2>{{getTitle()}}</h2>
      <ul>
         <li *ngFor="let course of courses">
         {{course}}</li>
      </ul>
   `
})
export class CoursesComponent{
    title="3Authors";
    courses;
   constructor(service:CoursesService){
      this.courses=service.getCourses();
   }
    getTitle(){
       return this.title;
    }
}