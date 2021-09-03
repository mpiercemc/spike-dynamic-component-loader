import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[controlHost]',
})
export class ControlHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
