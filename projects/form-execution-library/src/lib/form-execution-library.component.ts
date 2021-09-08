import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlHostDirective } from './directives/control-host.directive';
import {
  ControlComponent,
  ExecutionControlType,
} from './models/control-component';
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

      <button
        (click)="addColorsLibraryComponent()"
        mat-raised-button
        color="primary"
      >
        Add ColorsLibraryComponent
      </button>

      <button
        (click)="addRiskLibraryComponent()"
        mat-raised-button
        color="primary"
      >
        Add RiskLibraryComponent
      </button>

      <div class="component-list">
        <ng-template controlHost></ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .component-list {
        display: flex;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class FormExecutionLibraryComponent implements OnInit {
  private _elements: ExecutionControlType[] = [];

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
      viewContainerRef.createComponent<ExecutionControlType>(componentFactory);
    const newItem: ExecutionControlType = componentRef.instance;

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
        state: 'holy smokes',
        config: '{isLibrary: true, isAwesome: true}',
        id: 'ffr43qwg3fsdg4g4ep4',
      },
    });

    this.refreshView();
  }
}
