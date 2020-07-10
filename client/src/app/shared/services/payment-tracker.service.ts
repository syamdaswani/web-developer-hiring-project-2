import {Injectable} from '@angular/core';
import {PolicyTrackerModel} from '../models/policy-tracker.model';
import {PolicyInfoModel} from '../models/policy-info.model';
import {PaymentHistoryModel} from '../models/payment-history.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTrackerService {

  constructor() {
  }

  public getPolicyTrackerData(): Array<PolicyTrackerModel> {

    const policyTrackerData: Array<PolicyTrackerModel> = [
      {policyInfo: this.getPolicyInfoData(), paymentHistory: this.getPaymentHistoryData()},
      {policyInfo: this.getPolicyInfoData(), paymentHistory: this.getPaymentHistoryData()},
    ];
    policyTrackerData.push();
    return policyTrackerData;
  }

  public getPaymentHistoryData(): Array<PaymentHistoryModel> {
    const paymentHistory: Array<PaymentHistoryModel> = [
      {paymentDate: new Date('2020/07/01'), paymentAmount: 1000.00},
      {paymentDate: new Date('2020/08/01'), paymentAmount: 1100.00},
      {paymentDate: new Date('2020/09/01'), paymentAmount: 1200.00},
    ];
    return paymentHistory;
  }

  public getPolicyInfoData(): PolicyInfoModel {
    let policyInfo: PolicyInfoModel = new PolicyInfoModel();
    policyInfo.policyNumber = '12345';
    policyInfo.policyHolder = 'Syam Daswani';
    policyInfo.insuredPerson = 'Marga Daswani';
    policyInfo.coverageStartDate = new Date('2020/03/25');
    policyInfo.coverageEndDate = new Date('2099/10/18');
    policyInfo.lifeCoverage = 500000.00;
    policyInfo.lastStatementDate = new Date('2020/07/09');
    policyInfo.lastStatementAmount = 5430.77;
    policyInfo.paymentDueDate = new Date('2020/08/15');
    policyInfo.policyStatus = 'Active';
    return policyInfo;
  }
}
