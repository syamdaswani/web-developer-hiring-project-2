import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyTrackerComponent } from './policy-tracker.component';

describe('PolicyTrackerComponent', () => {
  let component: PolicyTrackerComponent;
  let fixture: ComponentFixture<PolicyTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the policy tracker component', () => {
    expect(component).toBeTruthy();
  });
});
