import { Type } from '@angular/core';
import { ComponentData } from './component-data';
import { CustomComponentData } from './custom-component-data';

export class CustomComponent {
  constructor(
    public component: Type<CustomComponentData>,
    public data: ComponentData
  ) {}
}
