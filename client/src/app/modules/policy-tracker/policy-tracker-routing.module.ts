import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PolicyTrackerComponent} from './components/policy-tracker-component/policy-tracker.component';


const routes: Routes = [
  {
    path: '',
    component: PolicyTrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyTrackerRoutingModule { }
