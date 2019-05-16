import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentHistoryItemComponent } from './appointment-history-item.component';

describe('AppointmentHistoryItemComponent', () => {
  let component: AppointmentHistoryItemComponent;
  let fixture: ComponentFixture<AppointmentHistoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentHistoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
