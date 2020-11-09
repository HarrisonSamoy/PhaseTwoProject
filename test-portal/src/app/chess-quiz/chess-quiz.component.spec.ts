import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessQuizComponent } from './chess-quiz.component';

describe('ChessQuizComponent', () => {
  let component: ChessQuizComponent;
  let fixture: ComponentFixture<ChessQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
