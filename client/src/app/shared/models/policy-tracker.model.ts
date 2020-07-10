import {PolicyInfoModel} from './policy-info.model';
import {PaymentHistoryModel} from './payment-history.model';

export class PolicyTrackerModel {
  policyInfo: PolicyInfoModel;
  paymentHistory: Array<PaymentHistoryModel>;
}
