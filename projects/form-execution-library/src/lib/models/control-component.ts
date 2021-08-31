import { Type } from '@angular/core';

export class ControlComponent {
  constructor(public component: Type<any>, public data: any) {}
}
