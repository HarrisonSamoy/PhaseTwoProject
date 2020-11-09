import { Component, OnInit } from '@angular/core';
import { Quiz, Question } from '../models/model-quiz';

@Component({
  selector: 'app-chess-quiz',
  templateUrl: './chess-quiz.component.html',
  styleUrls: ['./chess-quiz.component.css']
})
export class ChessQuizComponent implements OnInit {

  qNum:number = 1;
  size:number;
  qCurrent:Question;
  quiz:Quiz = new Quiz();
  finished:boolean = false;
  result:number;
  percentage:string;

  constructor() { }

  ngOnInit(): void {
    this.quiz.addQuestion("How many squares on a chess board?", 
    ["81", "49", "64", "100"], 2);
    this.quiz.addQuestion("How many pieces does each player begin play with?", 
    ["15", "16","17", "18"], 1);
    this.quiz.addQuestion("What is a stalemate?", ["When both players are unable to move", "When the ","", ""], 0);
    this.quiz.addQuestion("", ["", "","", ""], 0);
    this.quiz.addQuestion("", ["", "","", ""], 0);
    this.quiz.addQuestion("", ["", "","", ""], 0);
    this.quiz.addQuestion("", ["", "","", ""], 0);
    
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
