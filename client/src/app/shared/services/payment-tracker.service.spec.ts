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
});
