import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlHostDirective } from '../directives/control-host.directive';
import { CustomComponent } from '../models/custom-component';
import { GetFormControlsLibraryService } from '../services/get-form-controls-library.service';

/*
  TODO: Figure out how to dynamically load multiple custom form controls, not just a single one.
   The current example uses the controlHost directive which is referenced directly in the ts file
   Is it possible to append multiple on this view? Or loop through custom controls in the template
 */
@Component({
  selector: 'lib-form-execution-library',
  templateUrl: 'form-execution-library.component.html',
  styleUrls: ['form-execution-library.component.scss'],
})
export class FormExecutionLibraryComponent implements OnInit {
  @ViewChild(ControlHostDirective, { static: true })
  controlHost!: ControlHostDirective;
  interval: number | undefined;

  private refreshView() {
    const viewContainerRef = this.controlHost.viewContainerRef;
    viewContainerRef.clear();

    this.ngOnInit();
  }

  constructor(
    private formControlsLibaryService: GetFormControlsLibraryService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    let formControls = this.formControlsLibaryService.getFormControls();

    formControls.forEach((component) => {
      this.dynamicallyLoadComponent(component);
    });
  }

  dynamicallyLoadComponent(formComponent: CustomComponent): CustomComponent {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        formComponent.component
      );
    const viewContainerRef = this.controlHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = formComponent.data;

    return formComponent;
  }

  addColorsLibraryComponent() {
    this.formControlsLibaryService.addComponent({
      type: 'ColorsLibraryComponent',
      data: {
        state: "I'm Colors Library",
        config: '{isLibrary: true, isAwesome: true}',
        id: 'dfaf3awmpsdcksmaf323g',
      },
    });

    this.refreshView();
  }

  addRiskLibraryComponent() {
    this.formControlsLibaryService.addComponent({
      type: 'RiskLibraryComponent',
      data: {
        state: 'holy smokes',
        config: '{isLibrary: true, isAwesome: true}',
        id: 'ffr43qwg3fsdg4g4ep4',
      },
    });

    this.refreshView();
  }
}
