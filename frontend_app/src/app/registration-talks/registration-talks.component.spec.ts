import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTalksComponent } from './registration-talks.component';

describe('RegistrationTalksComponent', () => {
  let component: RegistrationTalksComponent;
  let fixture: ComponentFixture<RegistrationTalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationTalksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
