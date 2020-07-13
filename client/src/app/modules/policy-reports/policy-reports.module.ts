import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyReportsRoutingModule } from './policy-reports-routing.module';
import { UnpaidPremiumReportComponent } from './components/unpaid-premium-report/unpaid-premium-report.component';


@NgModule({
  declarations: [UnpaidPremiumReportComponent],
  imports: [
    CommonModule,
    PolicyReportsRoutingModule
  ]
})
export class PolicyReportsModule { }
