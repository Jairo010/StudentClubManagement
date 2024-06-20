import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGroupsComponent } from './registration-groups.component';

describe('RegistrationGroupsComponent', () => {
  let component: RegistrationGroupsComponent;
  let fixture: ComponentFixture<RegistrationGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
