import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitedTaskComponent } from './submited-task.component';

describe('SubmitedTaskComponent', () => {
  let component: SubmitedTaskComponent;
  let fixture: ComponentFixture<SubmitedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitedTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
