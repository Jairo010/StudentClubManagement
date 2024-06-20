import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsEditFormComponent } from './competitions-edit-form.component';

describe('CompetitionsEditFormComponent', () => {
  let component: CompetitionsEditFormComponent;
  let fixture: ComponentFixture<CompetitionsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionsEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
