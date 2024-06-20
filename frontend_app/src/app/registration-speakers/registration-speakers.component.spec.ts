import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSpeakersComponent } from './registration-speakers.component';

describe('RegistrationSpeakersComponent', () => {
  let component: RegistrationSpeakersComponent;
  let fixture: ComponentFixture<RegistrationSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationSpeakersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
