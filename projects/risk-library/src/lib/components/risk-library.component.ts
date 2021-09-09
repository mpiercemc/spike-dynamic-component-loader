import { Component, ElementRef, Input } from '@angular/core';
import { CustomComponentType } from '../../../../form-execution-library/src/lib/models/custom-component-type';
import { ControlValueAccessor } from '@angular/forms';
import { ComponentData } from 'projects/form-execution-library/src/lib/models/component-data';

@Component({
  selector: 'lib-risk-library',
  templateUrl: './lib-risk-library.component.html',
  styleUrls: ['./lib-risk-library.component.scss'],
})
export class RiskLibraryComponent
  implements CustomComponentType, ControlValueAccessor
{
  @Input() data!: ComponentData;

  constructor(private elementRef: ElementRef) {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}
