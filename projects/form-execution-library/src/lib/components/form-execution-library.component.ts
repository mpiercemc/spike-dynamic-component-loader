import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { ControlHostDirective } from '../directives/control-host.directive';
import { CustomComponent } from '../models/custom-component';
import { CustomComponentDataObject } from '../models/custom-component-data-object';
import { GetFormControlsLibraryService } from '../services/get-form-controls-library.service';

@Component({
  selector: 'lib-form-execution-library',
  templateUrl: 'form-execution-library.component.html',
  styleUrls: ['form-execution-library.component.scss'],
})
export class FormExecutionLibraryComponent implements OnInit {
  @ViewChild(ControlHostDirective, { static: true })
  controlHost!: ControlHostDirective;
  private _id = 0;

  constructor(
    private formControlsLibaryService: GetFormControlsLibraryService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    let formControls = this.formControlsLibaryService.getCustomComponents();

    formControls.forEach((component) => {
      this.dynamicallyLoadComponent(component);
    });
  }

  dynamicallyLoadComponent(formComponent: CustomComponent): CustomComponent {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        formComponent.component
      );
    const { instance, hostView } =
      this.controlHost.viewContainerRef.createComponent(componentFactory);

    instance.data = formComponent.data;
    instance.removeComponentEvent.subscribe(() => {
      this.removeComponent(hostView);
    });

    return formComponent;
  }

  addColorsLibraryComponent() {
    const component: CustomComponentDataObject = {
      type: 'ColorsLibraryComponent',
      data: {
        state: "I'm Colors Library",
        config: '{isLibrary: true, isAwesome: true}',
        id: `${this._id++}`,
      },
    };

    const customComponent =
      this.formControlsLibaryService.addComponent(component);

    this.dynamicallyLoadComponent(customComponent);
  }

  addRiskLibraryComponent() {
    const component: CustomComponentDataObject = {
      type: 'RiskLibraryComponent',
      data: {
        state: 'holy smokes',
        config: '{isLibrary: true, isAwesome: true}',
        id: `${this._id++}`,
      },
    };

    const customComponent =
      this.formControlsLibaryService.addComponent(component);

    this.dynamicallyLoadComponent(customComponent);
  }

  removeComponent(componentRef: ViewRef) {
    const viewContainerRef = this.controlHost.viewContainerRef;
    const index = viewContainerRef.indexOf(componentRef);
    viewContainerRef.remove(index);
    this.formControlsLibaryService.removeComponent(index);
  }
}
