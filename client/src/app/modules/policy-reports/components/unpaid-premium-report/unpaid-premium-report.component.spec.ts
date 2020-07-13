import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidPremiumReportComponent } from './unpaid-premium-report.component';

describe('UnpaidPremiumReportComponent', () => {
  let component: UnpaidPremiumReportComponent;
  let fixture: ComponentFixture<UnpaidPremiumReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpaidPremiumReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpaidPremiumReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
