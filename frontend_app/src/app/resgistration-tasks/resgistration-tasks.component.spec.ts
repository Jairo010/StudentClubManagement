import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistrationTasksComponent } from './resgistration-tasks.component';

describe('ResgistrationTasksComponent', () => {
  let component: ResgistrationTasksComponent;
  let fixture: ComponentFixture<ResgistrationTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistrationTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResgistrationTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
