import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent} from './question/question.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './app-routing.module';
import { BootstrapQuizComponent } from './bootstrap-quiz/bootstrap-quiz.component';
import { ChessQuizComponent } from './chess-quiz/chess-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    BootstrapQuizComponent,
    ChessQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
