import { Component, ElementRef, Input } from '@angular/core';
import { CustomComponentData } from '../../../../form-execution-library/src/lib/models/custom-component-data';
import { ControlValueAccessor } from '@angular/forms';
import { ComponentData } from 'projects/form-execution-library/src/lib/models/component-data';

@Component({
  selector: 'lib-risk-library',
  templateUrl: './lib-risk-library.component.html',
  styleUrls: ['./lib-risk-library.component.scss'],
})
export class RiskLibraryComponent
  implements CustomComponentData, ControlValueAccessor
{
  @Input() data!: ComponentData;

  constructor(private elementRef: ElementRef) {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}
