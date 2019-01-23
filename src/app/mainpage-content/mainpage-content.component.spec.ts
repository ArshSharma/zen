import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageContentComponent } from './mainpage-content.component';

describe('MainpageContentComponent', () => {
  let component: MainpageContentComponent;
  let fixture: ComponentFixture<MainpageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
