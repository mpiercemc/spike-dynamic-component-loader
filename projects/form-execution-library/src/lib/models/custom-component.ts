import { Type } from '@angular/core';
import { ComponentData } from './component-data';
import { CustomComponentType } from './custom-component-type';

export class CustomComponent {
  constructor(
    public component: Type<CustomComponentType>,
    public data: ComponentData
  ) {}
}
