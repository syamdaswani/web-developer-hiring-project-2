import { TestBed } from '@angular/core/testing';

import { PolicyInfoService } from './policy-info.service';

describe('PaymentTrackerService', () => {
  let service: PolicyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have policy info data', () => {
    expect(service.getPolicyInfoData()).not.toBeNull();
  });
});
