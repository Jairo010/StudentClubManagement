import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksEditFormComponent } from './tasks-edit-form.component';

describe('TasksEditFormComponent', () => {
  let component: TasksEditFormComponent;
  let fixture: ComponentFixture<TasksEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
