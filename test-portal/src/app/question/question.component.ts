import { Component, OnInit } from '@angular/core';
import { Question, Quiz } from '../models/model-quiz';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  qNum:number = 1;
  qCurrent: Question;
  quiz: Quiz = new Quiz();

  constructor() { }

  ngOnInit(): void {
    this.quiz.addQuestion("What is your name?", "ME", "WE", "US", "YOU");
    this.quiz.addQuestion("What is your name2?", "ME2", "WE2", "US2", "YOU2");

    this.setCurrentQuestion();
  }

  next() {
    if(this.qNum != this.quiz.length()) {
      this.qNum++;
      this.setCurrentQuestion();
    }
  }
  prev() {
    if(this.qNum != 1) {
      this.qNum--;
      this.setCurrentQuestion();
    }
  }
  
  private setCurrentQuestion() {
    this.qCurrent = this.quiz.getQuestion(this.qNum);
  }

}
