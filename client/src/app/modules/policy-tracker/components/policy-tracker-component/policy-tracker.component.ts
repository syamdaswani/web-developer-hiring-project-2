import {Component, OnInit} from '@angular/core';
import {PolicyTrackerModel} from '../../../../shared/models/policy-tracker.model';
import {PaymentTrackerService} from '../../../../shared/services/payment-tracker.service';

@Component({
  selector: 'app-policy-tracker',
  templateUrl: './policy-tracker.component.html',
  styleUrls: ['./policy-tracker.component.sass']
})
export class PolicyTrackerComponent implements OnInit {
  pageTitle = 'Policy Tracker';
  // TODO get this data from express
  policyTrackerData: Array<PolicyTrackerModel>;

  constructor(private paymentTrackerService: PaymentTrackerService) {
  }

  ngOnInit(): void {
    this.policyTrackerData = this.paymentTrackerService.getPolicyTrackerData();
  }

}
