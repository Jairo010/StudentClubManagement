import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMembersComponent } from './registration-members.component';

describe('RegistrationMembersComponent', () => {
  let component: RegistrationMembersComponent;
  let fixture: ComponentFixture<RegistrationMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
