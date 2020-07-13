"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
let Policyinfo = class Policyinfo {
    getNewPoliciesReportInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const newPoliciesReportInfoList = [];
            newPoliciesReportInfoList.push(this.createNewPoliciesReportInfo('Monthly'));
            newPoliciesReportInfoList.push(this.createNewPoliciesReportInfo('Yearly'));
            return newPoliciesReportInfoList;
        });
    }
    getPremiumsReportInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const premiumsReportInfoList = [];
            premiumsReportInfoList.push(this.createNewPremiumsReportInfo('Unpaid'));
            premiumsReportInfoList.push(this.createNewPremiumsReportInfo('Paid'));
            return premiumsReportInfoList;
        });
    }
    createNewPoliciesReportInfo(labelValue) {
        const paymentData = [];
        for (let i = 1; i <= 11; i++) {
            paymentData.push(this.randomIntFromInterval(1, 100));
        }
        return {
            data: paymentData,
            label: labelValue,
        };
    }
    createNewPremiumsReportInfo(labelValue) {
        const paymentData = [];
        for (let i = 1; i <= 11; i++) {
            paymentData.push(this.randomIntFromInterval(1, 100000000));
        }
        return {
            data: paymentData,
            label: labelValue,
        };
    }
    getPolicyInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const policyInfoList = [];
            // Create 100 Policies
            const users = [];
            for (let i = 1; i <= 100; i++) {
                policyInfoList.push(this.createNewPolicyInfo(i));
            }
            return policyInfoList;
        });
    }
    createNewPolicyInfo(id) {
        const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
            'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
            'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
        const policyHolderRandom = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        const insuredPersonRandom = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        const paymentHistoryList = [];
        // Generate a random payment history
        for (let i = 1; i <= this.randomIntFromInterval(1, 100); i++) {
            paymentHistoryList.push(this.createNewPaymentHistory(i));
        }
        // Some values should be greater than the others
        const premiumValue = [this.randomIntFromInterval(1, 5000000), this.randomIntFromInterval(1, 5000000)];
        const paymentProgress = [this.randomIntFromInterval(1, 20), this.randomIntFromInterval(1, 20)];
        const coverageDate = [this.randomDate(new Date('2001/01/01'), new Date('2020/12/31')),
            this.randomDate(new Date('2001/01/01'), new Date('2099/12/31'))];
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
    createNewPaymentHistory(id) {
        return {
            paymentAmount: this.randomIntFromInterval(1, 5000),
            paymentDate: this.randomDate(new Date('2001/01/01'), new Date('2020/12/31'))
        };
    }
    randomDate(start, end) {
        const date = new Date(+start + Math.random() * (end - start));
        return date;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
Policyinfo = __decorate([
    typedi_1.Service()
], Policyinfo);
exports.default = Policyinfo;
;
