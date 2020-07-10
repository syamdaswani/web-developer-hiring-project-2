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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<PaymentHistoryModel>) {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
