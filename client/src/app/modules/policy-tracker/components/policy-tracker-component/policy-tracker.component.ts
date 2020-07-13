import {Component, OnInit, ViewChild} from '@angular/core';
import {PaymentTrackerService} from '../../../../shared/services/payment-tracker.service';
import {MatTableDataSource} from '@angular/material/table';
import {PolicyInfoModel} from '../../../../shared/models/policy-info.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {PaymentHistoryComponent} from '../payment-history/payment-history.component';
import {PaymentHistoryModel} from '../../../../shared/models/payment-history.model';
import {PolicyInformationComponent} from '../policy-information/policy-information.component';

@Component({
  selector: 'app-policy-tracker',
  templateUrl: './policy-tracker.component.html',
  styleUrls: ['./policy-tracker.component.sass']
})
export class PolicyTrackerComponent implements OnInit {
  pageTitle = 'Policy Tracker';
  displayedColumns: string[] = ['policyNo', 'policyHolder', 'insuredPerson', 'mode', 'paidPremium', 'totalPremium', 'showPolicyInfo', 'showPaymentHistory'];
  dataSource: MatTableDataSource<PolicyInfoModel>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private paymentTrackerService: PaymentTrackerService,
              public dialog: MatDialog) {
    this.initializeDataSource().then(r => console.log(r));
  }

  async initializeDataSource(): Promise<MatTableDataSource<PolicyInfoModel>> {
    let policyInfoList: Array<PolicyInfoModel> = [];
    await this.paymentTrackerService.getPolicyInfoData().toPromise().then(value => {
      policyInfoList = value;
      return policyInfoList;
    });
    this.dataSource = new MatTableDataSource(policyInfoList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    return this.dataSource;
  }

  ngOnInit(): void {
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openPaymentHistoryDialog(yearsPaid: number,
                           yearsToPay: number,
                           paymentHistory: Array<PaymentHistoryModel>): void {
    const dialogRef = this.dialog.open(PaymentHistoryComponent, {
      data: {
        yearsPaidData: yearsPaid,
        yearsToPayData: yearsToPay,
        paymentHistoryData: paymentHistory
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openPolicyInfoDialog(policyInfo: PolicyInfoModel): void {
    const dialogRef = this.dialog.open(PolicyInformationComponent, {
      data: {
        policyInfoData: policyInfo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
