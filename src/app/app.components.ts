import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.components";


@Component({
    selector: 'timesheet-app',
    template: `
        <h1>TimeSheet App</h1>
        <button type="button" class="btn btn-primary">Get All Employees</button>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})

export class AppComponent{}

/*
 <courses></courses>
 <authors></authors>
*/
