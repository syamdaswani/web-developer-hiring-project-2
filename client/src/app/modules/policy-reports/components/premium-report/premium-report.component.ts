import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {PolicyInfoService} from '../../../../shared/services/policy-info.service';
import {MatTableDataSource} from '@angular/material/table';
import {PolicyInfoModel} from '../../../../shared/models/policy-info.model';

@Component({
  selector: 'app-unpaid-premium-report',
  templateUrl: './premium-report.component.html',
  styleUrls: ['./premium-report.component.sass']
})
export class PremiumReportComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{data: [0], label: ''}];

  constructor(private paymentTrackerService: PolicyInfoService) {
    this.initializeDataSet().then(r => console.log(r));
  }

  ngOnInit(): void {
  }

  async initializeDataSet(): Promise<Array<ChartDataSets>> {
    await this.paymentTrackerService.getPolicyReportInfo().toPromise().then(value => {
      this.barChartData = value;
    });
    console.log(this.barChartData);
    return this.barChartData;
  }
}
