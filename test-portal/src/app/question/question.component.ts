import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
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
    this.quiz.addQuestion("What is your name?", ["ME", "WE", "US", "Right"], 3);
    this.quiz.addQuestion("What is your name2?", ["ME2", "Right2", "US2", "YOU2"], 1);
    this.quiz.addQuestion("What is your name3?", ["ME3", "Right3", "US3", "YOU3"], 1);

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
  save(form: any) {
    console.log("Question #" + this.qNum + ": answer = " + form.questionaire);
    if (form.questionaire != "") {
      this.quiz.setQuestionGuess(this.qNum, eval(form.questionaire));
    }
  }
  
  private setCurrentQuestion() {
    this.qCurrent = this.quiz.getQuestion(this.qNum);
    console.log("Current guess is..." + this.qCurrent.guess);
  }

}
