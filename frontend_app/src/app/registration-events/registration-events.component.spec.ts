import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationEventsComponent } from './registration-events.component';

describe('RegistrationEventsComponent', () => {
  let component: RegistrationEventsComponent;
  let fixture: ComponentFixture<RegistrationEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
