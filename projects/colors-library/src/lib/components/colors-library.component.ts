import { Component, Input } from '@angular/core';
import { CustomComponentData } from '../../../../form-execution-library/src/lib/models/custom-component-data';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lib-colors-library',
  templateUrl: 'colors-library.component.html',
  styleUrls: ['colors-library.component.scss'],
})
export class ColorsLibraryComponent
  implements CustomComponentData, ControlValueAccessor
{
  @Input() data = { state: '', config: '', id: '' };
  constructor() {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}
