import { Component, Input, OnInit } from '@angular/core';
import { ControlComponentType } from '../../../form-execution-library/src/lib/models/control-component-type';

@Component({
  selector: 'lib-colors-library',
  template: `
    <div class="component-styles">
      <p>COLORS LIBRARY! Custom Control</p>
      <div>State: {{data.state}}</div>
      <div>Configuration: {{data.config}}</div>
      <div>ID: {{data.id}}</div>
    </div>

  `,
  styles: [
  ]
})
export class ColorsLibraryComponent implements ControlComponentType {
  @Input() data = {state: '', config: '', id: ''};
  constructor() { }
}
