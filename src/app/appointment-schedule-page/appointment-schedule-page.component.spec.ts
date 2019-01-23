import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSchedulePageComponent } from './appointment-schedule-page.component';

describe('AppointmentSchedulePageComponent', () => {
  let component: AppointmentSchedulePageComponent;
  let fixture: ComponentFixture<AppointmentSchedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentSchedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
