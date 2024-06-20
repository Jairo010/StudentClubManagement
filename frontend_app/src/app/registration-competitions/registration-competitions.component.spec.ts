import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCompetitionsComponent } from './registration-competitions.component';

describe('RegistrationCompetitionsComponent', () => {
  let component: RegistrationCompetitionsComponent;
  let fixture: ComponentFixture<RegistrationCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationCompetitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
