import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnpaidPremiumReportComponent} from './components/unpaid-premium-report/unpaid-premium-report.component';


const routes: Routes = [
  {
    path: 'reports',
    component: UnpaidPremiumReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyReportsRoutingModule { }
