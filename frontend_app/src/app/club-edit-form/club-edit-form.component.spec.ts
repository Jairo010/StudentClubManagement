import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubEditFormComponent } from './club-edit-form.component';

describe('ClubEditFormComponent', () => {
  let component: ClubEditFormComponent;
  let fixture: ComponentFixture<ClubEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
