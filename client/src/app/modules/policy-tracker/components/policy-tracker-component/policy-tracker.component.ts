import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-policy-tracker',
  templateUrl: './policy-tracker.component.html',
  styleUrls: ['./policy-tracker.component.sass']
})
export class PolicyTrackerComponent implements OnInit {
  pageTitle = 'Policy Tracker';
  // TODO get this data from express
  policyTrackerData = [{
    overview: [
      {
        overview_title: 'Policy No',
        overview_value: '12345'
      },
      {
        overview_title: 'Policy Holder',
        overview_value: 'Syam Daswani'
      },
      {
        overview_title: 'Insured',
        overview_value: 'Marga Daswani'
      }],
    policyInfo: {
      life_coverage: 500000.00,
      last_statement_date: '2020/07/09',
      last_statement_amount: 5430.77,
      payment_due_date: '2020/08/15',
      policy_status: 'Active'
    }
  }, {
    overview: [
      {
        overview_title: 'Policy No',
        overview_value: '67890'
      },
      {
        overview_title: 'Policy Holder',
        overview_value: 'Marissa Daswani'
      },
      {
        overview_title: 'Insured',
        overview_value: 'Janaki Daswani'
      }],
    policyInfo: {
      life_coverage: 500000.00,
      last_statement_date: '2020/01/02',
      last_statement_amount: 5430.77,
      payment_due_date: '2020/02/15',
      policy_status: 'Active'
    }
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
