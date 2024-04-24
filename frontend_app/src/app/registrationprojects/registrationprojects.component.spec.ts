import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationprojectsComponent } from './registrationprojects.component';

describe('RegistrationprojectsComponent', () => {
  let component: RegistrationprojectsComponent;
  let fixture: ComponentFixture<RegistrationprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationprojectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
