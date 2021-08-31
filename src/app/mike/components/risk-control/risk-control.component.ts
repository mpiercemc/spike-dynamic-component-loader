import { Component, Input, OnInit } from '@angular/core';
import { ControlComponentType } from '../../models/control-component-type';

@Component({
  selector: 'app-risk-control',
  templateUrl: './risk-control.component.html',
  styleUrls: ['./risk-control.component.scss']
})
export class RiskControlComponent implements OnInit, ControlComponentType {
  @Input() data = {state: '', config: '', id: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
