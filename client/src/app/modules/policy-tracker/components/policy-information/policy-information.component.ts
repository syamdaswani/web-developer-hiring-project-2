import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-policy-information',
  templateUrl: './policy-information.component.html',
  styleUrls: ['./policy-information.component.sass']
})
export class PolicyInformationComponent implements OnInit {
  @Input() policyInfoData;
  constructor() { }

  ngOnInit(): void {
  }

}
