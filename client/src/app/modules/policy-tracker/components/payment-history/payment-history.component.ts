import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.sass']
})
export class PaymentHistoryComponent implements OnInit {
  @Input() paymentHistoryData;
  constructor() {
  }

  ngOnInit(): void {
  }

}
