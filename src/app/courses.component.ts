import { from } from 'rxjs';
import { Component, TemplateRef } from '@angular/core';
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
    title="list of courses";
    courses;

    getTitle(){
       return this.title;
    }
}