import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PaymentHistoryModel} from '../../../../shared/models/payment-history.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PolicyInfoModel} from '../../../../shared/models/policy-info.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.sass']
})
export class PaymentHistoryComponent implements OnInit {
  displayedColumns: string[] = ['paymentDate', 'paymentAmount'];
  dataSource: MatTableDataSource<PaymentHistoryModel>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  yearsPaid: number;
  yearsToPay: number;
  paymentProgress: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.dataSource = new MatTableDataSource(this.data.paymentHistoryData);
    this.yearsPaid = this.data.yearsPaidData;
    this.yearsToPay = this.data.yearsToPayData;
    this.paymentProgress = this.computePaymentProgress(this.yearsPaid, this.yearsToPay);
    console.log(this.paymentProgress);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  computePaymentProgress(yearsPaid: number,
                         yearsToPay: number): number {
    return (yearsPaid / yearsToPay) * 100;
  }
}
