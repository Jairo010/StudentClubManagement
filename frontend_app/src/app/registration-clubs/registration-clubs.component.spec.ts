import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationClubsComponent } from './registration-clubs.component';

describe('RegistrationClubsComponent', () => {
  let component: RegistrationClubsComponent;
  let fixture: ComponentFixture<RegistrationClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationClubsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
