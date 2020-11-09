import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapQuizComponent } from './bootstrap-quiz/bootstrap-quiz.component';
import { ChessQuizComponent } from './chess-quiz/chess-quiz.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const applicationRoutes: Routes = [
  {path:'questions', component:QuestionComponent},
  {path:'bootstrap', component:BootstrapQuizComponent},
  {path:'chess', component:ChessQuizComponent}
]
