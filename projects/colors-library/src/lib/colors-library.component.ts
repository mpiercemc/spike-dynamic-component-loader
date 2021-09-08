import { Component, Input } from '@angular/core';
import { ControlComponentType } from '../../../form-execution-library/src/lib/models/control-component-type';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lib-colors-library',
  template: `
    <div class="component-styles">
      <p>COLORS LIBRARY! Custom Control</p>
      <div>State: {{ data.state }}</div>
      <div>Configuration: {{ data.config }}</div>
      <div>ID: {{ data.id }}</div>
    </div>
  `,
  styles: [],
})
export class ColorsLibraryComponent
  implements ControlComponentType, ControlValueAccessor
{
  @Input() data = { state: '', config: '', id: '' };
  constructor() {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}
