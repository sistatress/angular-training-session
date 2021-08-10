import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Course } from "../../app/model/course";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  // Course type
  // Methode A : by one field

  // @Input()
  // title: string;

  // description: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, at!';
  // content: string = `
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //   Aliquam quos, vel magnam ut quasi quas pariatur earum provident
  //   quam doloremque debitis in mollitia illo nisi expedita at nobis
  //   dolorem. Iure.
  //   `;

  // Methode B : by using model
  @Input()
  course: Course;

  // Submit Button
  buttonName: string = "Open Course";

  // @Output()
  // courseSelected = new EventEmitter<Course>();

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Card component -- button clicked ...");
    this.courseEmitter.emit(this.course);
  }
}
