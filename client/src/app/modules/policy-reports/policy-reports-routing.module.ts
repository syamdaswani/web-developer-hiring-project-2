import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PremiumReportComponent} from './components/premium-report/premium-report.component';


const routes: Routes = [
  {
    path: 'reports',
    component: PremiumReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyReportsRoutingModule { }
