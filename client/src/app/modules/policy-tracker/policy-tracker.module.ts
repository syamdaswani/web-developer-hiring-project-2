import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PolicyTrackerRoutingModule} from './policy-tracker-routing.module';
import {PolicyTrackerComponent} from './components/policy-tracker-component/policy-tracker.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { PolicyInformationComponent } from './components/policy-information/policy-information.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import {PolicyInfoService} from '../../shared/services/policy-info.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PolicyTrackerComponent, PolicyInformationComponent, PaymentHistoryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    PolicyTrackerRoutingModule,
  ],
  providers: [PolicyInfoService]
})
export class PolicyTrackerModule { }
