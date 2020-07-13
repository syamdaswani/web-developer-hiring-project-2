import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyReportsRoutingModule } from './policy-reports-routing.module';
import { PremiumReportComponent } from './components/premium-report/premium-report.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [PremiumReportComponent],
  imports: [
    CommonModule,
    ChartsModule,
    PolicyReportsRoutingModule
  ]
})
export class PolicyReportsModule { }
