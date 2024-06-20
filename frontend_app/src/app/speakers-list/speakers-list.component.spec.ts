import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersListComponent } from './speakers-list.component';

describe('SpeakersListComponent', () => {
  let component: SpeakersListComponent;
  let fixture: ComponentFixture<SpeakersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeakersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});