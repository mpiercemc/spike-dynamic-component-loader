import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomComponentType } from '../../../../form-execution-library/src/lib/models/custom-component-type';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lib-colors-library',
  templateUrl: 'colors-library.component.html',
  styleUrls: ['colors-library.component.scss'],
})
export class ColorsLibraryComponent
  implements CustomComponentType, ControlValueAccessor
{
  @Input() data = { state: '', config: '', id: '' };
  @Output() removeComponentEvent = new EventEmitter<string>();

  constructor() {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}

  removeComponent() {
    this.removeComponentEvent.emit(this.data.id);
  }
}
