import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PaymentHistoryModel} from '../../../../shared/models/payment-history.model';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.sass']
})
export class PaymentHistoryComponent implements OnInit {
  @Input() paymentHistoryData;
  displayedColumns: string[] = ['paymentDate', 'paymentAmount'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
