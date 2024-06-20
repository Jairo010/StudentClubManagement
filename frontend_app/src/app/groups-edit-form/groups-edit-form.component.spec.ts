import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsEditFormComponent } from './groups-edit-form.component';

describe('GroupsEditFormComponent', () => {
  let component: GroupsEditFormComponent;
  let fixture: ComponentFixture<GroupsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
