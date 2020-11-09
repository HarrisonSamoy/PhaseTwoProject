import { Component, OnInit } from '@angular/core';
import { Quiz, Question } from '../models/model-quiz';

@Component({
  selector: 'app-bootstrap-quiz',
  templateUrl: './bootstrap-quiz.component.html',
  styleUrls: ['./bootstrap-quiz.component.css']
})
export class BootstrapQuizComponent implements OnInit {
  qNum:number = 1;
  size:number;
  qCurrent:Question;
  quiz:Quiz = new Quiz();
  finished:boolean = false;
  result:number;
  percentage:string;

  constructor() { }

  ngOnInit(): void {
    this.quiz.addQuestion("What is your name?", ["ME", "WE", "US", "Right"], 3);
    this.quiz.addQuestion("What is your name2?", ["ME2", "Right2", "US2", "YOU2"], 1);
    this.quiz.addQuestion("What is your name3?", ["ME3", "Right3", "US3", "YOU3"], 1);
    
    this.size = this.quiz.length();

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
    if (form.questionaire != "") {
      this.quiz.setQuestionGuess(this.qNum, eval(form.questionaire));
    }
  }
  finish() {
    this.finished = true;
    this.result = this.quiz.getResult();
    this.percentage = (this.result / this.quiz.length() * 100).toFixed(2);
  }
  
  private setCurrentQuestion() {
    this.qCurrent = this.quiz.getQuestion(this.qNum);
  }

}
