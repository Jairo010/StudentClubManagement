import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersEditFormComponent } from './speakers-edit-form.component';

describe('SpeakersEditFormComponent', () => {
  let component: SpeakersEditFormComponent;
  let fixture: ComponentFixture<SpeakersEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakersEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeakersEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
