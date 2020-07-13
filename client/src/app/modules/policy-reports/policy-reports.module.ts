import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyReportsRoutingModule } from './policy-reports-routing.module';
import { PremiumReportComponent } from './components/premium-report/premium-report.component';
import {ChartsModule} from 'ng2-charts';
import {PolicyInfoService} from '../../shared/services/policy-info.service';


@NgModule({
  declarations: [PremiumReportComponent],
  imports: [
    CommonModule,
    ChartsModule,
    PolicyReportsRoutingModule
  ],
  providers: [PolicyInfoService]
})
export class PolicyReportsModule { }
