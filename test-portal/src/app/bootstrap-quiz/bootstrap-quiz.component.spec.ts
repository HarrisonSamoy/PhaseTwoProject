import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapQuizComponent } from './bootstrap-quiz.component';

describe('BootstrapQuizComponent', () => {
  let component: BootstrapQuizComponent;
  let fixture: ComponentFixture<BootstrapQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
