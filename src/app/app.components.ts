import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.components";

@Component({
    selector: 'timesheet-app',
    template: `
        <h1>My First App</h1>
        <courses></courses>
        <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})

export class AppComponent{}