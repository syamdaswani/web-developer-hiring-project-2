import {Service} from 'typedi';
import {PolicyInfoModel} from '../models/policy-info.model';
import {PaymentHistoryModel} from '../models/payment-history.model';
import {PolicyReportModel} from '../models/policy-report.model';


@Service()
export default class Policyinfo {
    public async getPolicyReportInfo(): Promise<Array<PolicyReportModel>> {
        const policyReportInfoList: Array<PolicyReportModel> = [];
        policyReportInfoList.push(this.createNewPolicyReportInfo('Unpaid'));
        policyReportInfoList.push(this.createNewPolicyReportInfo('Paid'));
        return policyReportInfoList;
    }

    createNewPolicyReportInfo(labelValue: string): PolicyReportModel {
        const paymentData = [];
        for (let i = 1; i <= 11; i++) {
            paymentData.push(this.randomIntFromInterval(1, 100000000));
        }
        return {
            data: paymentData,
            label: labelValue,
        };
    }

    public async getPolicyInfo(): Promise<Array<PolicyInfoModel>> {
        const policyInfoList: Array<PolicyInfoModel> = [];
        // Create 100 Policies
        const users: PolicyInfoModel[] = [];
        for (let i = 1; i <= 100; i++) {
            policyInfoList.push(this.createNewPolicyInfo(i));
        }
        return policyInfoList;
    }

    createNewPolicyInfo(id: number): PolicyInfoModel {
        const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
            'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
            'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
        const policyHolderRandom =
            NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        const insuredPersonRandom =
            NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        const paymentHistoryList: Array<PaymentHistoryModel> = [];
        // Generate a random payment history
        for (let i = 1; i <= this.randomIntFromInterval(1, 100); i++) {
            paymentHistoryList.push(this.createNewPaymentHistory(i));
        }
        // Some values should be greater than the others
        const premiumValue = [this.randomIntFromInterval(1, 5000000), this.randomIntFromInterval(1, 5000000)];
        const paymentProgress = [this.randomIntFromInterval(1, 20), this.randomIntFromInterval(1, 20)];
        const coverageDate: Date[] = [this.randomDate(new Date('2001/01/01'), new Date('2020/12/31')),
            this.randomDate(new Date('2001/01/01'), new Date('2099/12/31'))]
        return {
            policyNumber: id.toString(),
            policyHolder: policyHolderRandom,
            insuredPerson: insuredPersonRandom,
            coverageStartDate: coverageDate[0] > coverageDate[1] ? coverageDate[1] : coverageDate[0],
            coverageEndDate: coverageDate[0] > coverageDate[1] ? coverageDate[0] : coverageDate[1],
            lifeCoverage: this.randomIntFromInterval(1, 500000),
            lastStatementDate: this.randomDate(new Date('2001/01/01'), new Date('2020/12/31')),
            lastStatementAmount: this.randomIntFromInterval(1, 50000),
            paymentDueDate: this.randomDate(new Date('2001/01/01'), new Date('2020/12/31')),
            policyStatus: 'Active',
            mode: this.randomIntFromInterval(1, 2) === 1 ? 'Monthly' : 'Yearly',
            paidPremium: premiumValue[0] > premiumValue[1] ? premiumValue[1] : premiumValue[0],
            totalPremium: premiumValue[0] > premiumValue[1] ? premiumValue[0] : premiumValue[1],
            paymentHistory: paymentHistoryList,
            yearsPaid: paymentProgress[0] > paymentProgress[1] ? paymentProgress[1] : paymentProgress[0],
            yearsToPay: paymentProgress[0] > paymentProgress[1] ? paymentProgress[0] : paymentProgress[1]
        };
    }

    createNewPaymentHistory(id: number): PaymentHistoryModel {
        return {
            paymentAmount: this.randomIntFromInterval(1, 5000),
            paymentDate: this.randomDate(new Date('2001/01/01'), new Date('2020/12/31'))
        };
    }

    randomDate(start: any, end: any): Date {
        const date = new Date(+start + Math.random() * (end - start));
        return date;
    }

    randomIntFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};