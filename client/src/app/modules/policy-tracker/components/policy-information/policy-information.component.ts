import {Component, Inject, Input, OnInit} from '@angular/core';
import {PolicyInfoModel} from '../../../../shared/models/policy-info.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-policy-information',
  templateUrl: './policy-information.component.html',
  styleUrls: ['./policy-information.component.sass']
})
export class PolicyInformationComponent implements OnInit {
  policyInfoData: PolicyInfoModel;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.policyInfoData = data.policyInfoData;
  }

  ngOnInit(): void {
  }

}
