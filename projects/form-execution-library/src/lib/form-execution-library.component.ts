import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
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

    <div>Load the following components dynamically from the json data</div>

    <div>
      <h3>Custom Form Controls</h3>

      <button (click)="addColorsLibraryComponent()">
        Add ColorsLibraryComponent
      </button>

      <button (click)="addRiskLibraryComponent()">
        Add ColorsLibraryComponent
      </button>

      <ng-template controlHost></ng-template>

      <ng-template #dynamicContainer></ng-template>
    </div>
  `,
  styles: [],
})
export class FormExecutionLibraryComponent implements OnInit {
  private _elements: ControlComponent[] = [];

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

  dynamicallyLoadComponent(formComponent: ControlComponent): ControlComponent {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        formComponent.component
      );
    const viewContainerRef = this.controlHost.viewContainerRef;
    const componentRef =
      viewContainerRef.createComponent<ControlComponent>(componentFactory);
    const newItem: ControlComponent = componentRef.instance;

    this._elements.push(newItem);
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
        state: "I'm Colors Library",
        config: '{isLibrary: true, isAwesome: true}',
        id: 'dfaf3awmpsdcksmaf323g',
      },
    });

    this.refreshView();
  }
}
