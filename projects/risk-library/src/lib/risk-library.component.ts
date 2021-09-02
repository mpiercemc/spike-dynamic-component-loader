import { Component, ElementRef, Input } from '@angular/core';
import { ControlComponentType } from '../../../form-execution-library/src/lib/models/control-component-type';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lib-risk-library',
  templateUrl: './lib-risk-library.component.html',
  styles: [
  ]
})
export class RiskLibraryComponent implements ControlComponentType, ControlValueAccessor {
  @Input() data = {state: '', config: '', id: ''};
  constructor(private elementRef: ElementRef) { }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }
}
