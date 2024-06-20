import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksListComponent } from './talks-list.component';

describe('TalksListComponent', () => {
  let component: TalksListComponent;
  let fixture: ComponentFixture<TalksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
