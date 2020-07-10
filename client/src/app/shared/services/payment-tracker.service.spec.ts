import { TestBed } from '@angular/core/testing';

import { PaymentTrackerService } from './payment-tracker.service';

describe('PaymentTrackerService', () => {
  let service: PaymentTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have policy info data', () => {
    expect(service.getPolicyInfoData()).not.toBeNull();
  });

  it('should have payment history data', () => {
    expect(service.getPaymentHistoryData()).not.toBeNull();
  });

  it('should have policy tracker data', () => {
    expect(service.getPolicyTrackerData()).not.toBeNull();
  });
});
