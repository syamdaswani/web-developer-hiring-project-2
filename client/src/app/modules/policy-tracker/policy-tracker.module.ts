import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PolicyTrackerRoutingModule} from './policy-tracker-routing.module';
import {PolicyTrackerComponent} from './components/policy-tracker-component/policy-tracker.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { PolicyInformationComponent } from './components/policy-information/policy-information.component';


@NgModule({
  declarations: [PolicyTrackerComponent, PolicyInformationComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    PolicyTrackerRoutingModule,
  ]
})
export class PolicyTrackerModule { }
