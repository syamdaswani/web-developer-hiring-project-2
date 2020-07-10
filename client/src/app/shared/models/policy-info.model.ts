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
}
