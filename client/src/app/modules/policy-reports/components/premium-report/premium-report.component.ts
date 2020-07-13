import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-unpaid-premium-report',
  templateUrl: './premium-report.component.html',
  styleUrls: ['./premium-report.component.sass']
})
export class PremiumReportComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Unpaid'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Paid'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
