import { Component, Input, OnInit } from '@angular/core';
import { ControlComponentType } from '../../models/control-component-type';

@Component({
  selector: 'app-color-picker-control',
  templateUrl: './color-picker-control.component.html',
  styleUrls: ['./color-picker-control.component.scss']
})
export class ColorPickerControlComponent implements OnInit, ControlComponentType {
  @Input() data = {state: '', config: '', id: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
