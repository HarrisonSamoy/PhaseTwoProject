import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  qNum:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    if(this.qNum != 10) {
      this.qNum++;
    }
  }
  prev() {
    if(this.qNum != 1) {
      this.qNum--;
    }
  }

}
