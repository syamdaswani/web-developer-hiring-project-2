import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {PolicyInfoService} from '../../../../shared/services/policy-info.service';
import {MatTableDataSource} from '@angular/material/table';
import {PolicyInfoModel} from '../../../../shared/models/policy-info.model';

@Component({
  selector: 'app-unpaid-premium-report',
  templateUrl: './premium-report.component.html',
  styleUrls: ['./premium-report.component.sass']
})
export class PremiumReportComponent implements OnInit {
  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartLabels: Label[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  barChartType: ChartType = 'bar';
  chartLegend = true;
  chartPlugins = [];
  barChartData: ChartDataSets[] = [{data: [0], label: ''}];

  lineChartData: ChartDataSets[] = [{data: [0], label: ''}];

  constructor(private paymentTrackerService: PolicyInfoService) {
    this.initializeBarChartDataSet().then(r => console.log(r));
    this.initializeLineChartDataSet().then(r => console.log(r));
  }

  ngOnInit(): void {
  }

  async initializeBarChartDataSet(): Promise<Array<ChartDataSets>> {
    await this.paymentTrackerService.getPremiumsReportInfo().toPromise().then(value => {
      this.barChartData = value;
    });
    return this.barChartData;
  }

  async initializeLineChartDataSet(): Promise<Array<ChartDataSets>> {
    await this.paymentTrackerService.getNewPoliciesReportInfo().toPromise().then(value => {
      this.lineChartData = value;
    });
    return this.lineChartData;
  }
}
