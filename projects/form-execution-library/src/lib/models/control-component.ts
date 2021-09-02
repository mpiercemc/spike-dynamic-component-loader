import { Type } from '@angular/core';
import { ControlComponentType } from './control-component-type';
import { ControlValueAccessor } from '@angular/forms';

export class ControlComponent {
  constructor(public component: Type<ExecutionControlType>, public data: ControlComponentType) {}
}

export interface ExecutionControlType extends ControlValueAccessor {
}
