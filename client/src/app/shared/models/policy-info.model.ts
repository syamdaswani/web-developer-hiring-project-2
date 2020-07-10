import {PaymentHistoryModel} from './payment-history.model';

export class PolicyInfoModel {
  policyNumber: string;
  policyHolder: string;
  insuredPerson: string;
  coverageStartDate: Date;
  coverageEndDate: Date;
  lifeCoverage: number;
  lastStatementDate: Date;
  lastStatementAmount: number;
  paymentDueDate: Date;
  policyStatus: string;
  mode: string;
  paidPremium: number;
  totalPremium: number;
  paymentHistory: Array<PaymentHistoryModel>;
  yearsPaid: number;
  yearsToPay: number;
}
