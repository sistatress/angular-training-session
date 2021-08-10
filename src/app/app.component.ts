import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app-component";

  courseA = COURSES[0];
  courseB = COURSES[1];
  courseC = COURSES[2];

  // onCardClicked() {
  //   console.log(`App component -- click event bubbled ...`)
  // }

  onCourseSelected(course: Course) {
    console.log(
      "App component | M-onCourseSelected  -- click event bubbled ... ",
      course
    );
  }
}
