import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ControlHostDirective } from './directives/control-host.directive';
import { ControlComponent } from './models/control-component';
import { GetFormControlsLibraryService } from './services/get-form-controls-library.service';
/*
  TODO: Figure out how to dynamically load multiple custom form controls, not just a single one.
   The current example uses the controlHost directive which is referenced directly in the ts file
   Is it possible to append multiple on this view? Or loop through custom controls in the template
 */
@Component({
  selector: 'lib-form-execution-library',
  template: `
    <p>mike-spike works!</p>

    <div>
      Load the following components dynamically from the json data
    </div>

    <div class="ad-banner-example">
      <h3>Custom Form Controls</h3>
      <ng-template controlHost></ng-template>
    </div>

  `,
  styles: [
  ]
})
export class FormExecutionLibraryComponent implements OnInit {
  @ViewChild(ControlHostDirective, {static: true}) controlHost!: ControlHostDirective;
  interval: number | undefined;

  constructor(private formControlsLibaryService: GetFormControlsLibraryService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    let formControls = this.formControlsLibaryService.getFormControls();
    this.dynamicallyLoadComponent(formControls[0]);
  }

  dynamicallyLoadComponent(formComponent: ControlComponent) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(formComponent.component);
    const viewContainerRef = this.controlHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<ControlComponent>(componentFactory);
    componentRef.instance.data = formComponent.data;
  }

}
