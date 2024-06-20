import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksEditFormComponent } from './talks-edit-form.component';

describe('TalksEditFormComponent', () => {
  let component: TalksEditFormComponent;
  let fixture: ComponentFixture<TalksEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalksEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalksEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
