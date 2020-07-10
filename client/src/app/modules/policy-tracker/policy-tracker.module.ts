import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PolicyTrackerRoutingModule} from './policy-tracker-routing.module';
import {PolicyTrackerComponent} from './components/policy-tracker-component/policy-tracker.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { PolicyInformationComponent } from './components/policy-information/policy-information.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import {PaymentTrackerService} from '../../shared/services/payment-tracker.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [PolicyTrackerComponent, PolicyInformationComponent, PaymentHistoryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    PolicyTrackerRoutingModule,
  ],
  providers: [PaymentTrackerService]
})
export class PolicyTrackerModule { }
