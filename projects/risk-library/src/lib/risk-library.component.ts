import { Component, Input } from '@angular/core';
import { ControlComponentType } from '../../../form-execution-library/src/lib/models/control-component-type';

@Component({
  selector: 'lib-risk-library',
  templateUrl: './lib-risk-library.component.html',
  styles: [],
})
export class RiskLibraryComponent implements ControlComponentType {
  @Input() data = { state: '', config: '', id: '' };
  constructor() {}
}
