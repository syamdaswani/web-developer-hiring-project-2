import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyInformationComponent } from './policy-information.component';
import {PolicyTrackerComponent} from '../policy-tracker-component/policy-tracker.component';
import {PolicyInfoModel} from '../../../../shared/models/policy-info.model';

describe('PolicyInformationComponent', () => {
  let component: PolicyInformationComponent;
  let fixture: ComponentFixture<PolicyInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyInformationComponent);
    component = fixture.componentInstance;
    component.policyInfoData = new PolicyInfoModel();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it(`should have policy info data`, () => {
    fixture = TestBed.createComponent(PolicyInformationComponent);
    component = fixture.componentInstance;
    expect(component.policyInfoData.length).toBeGreaterThan(0);
  });*/
});
