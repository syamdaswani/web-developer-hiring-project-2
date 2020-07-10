import {Component, Input, OnInit} from '@angular/core';
import {PolicyInfoModel} from '../../../../shared/models/policy-info.model';

@Component({
  selector: 'app-policy-information',
  templateUrl: './policy-information.component.html',
  styleUrls: ['./policy-information.component.sass']
})
export class PolicyInformationComponent implements OnInit {
  @Input() policyInfoData: PolicyInfoModel;
  constructor() { }

  ngOnInit(): void {
  }

}
