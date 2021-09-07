import { Type } from '@angular/core';
import { ControlComponentType } from './control-component-type';
import { ControlValueAccessor } from '@angular/forms';
import { RiskLibraryComponent } from 'projects/risk-library/src/public-api';

export class ControlComponent {
  constructor(
    public component: Type<ExecutionControlType>,
    public data: ControlComponentType
  ) {}
}

export interface ExecutionControlType extends ControlValueAccessor {
  data: any;
}
