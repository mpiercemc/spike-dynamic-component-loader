import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { ControlHostDirective } from '../directives/control-host.directive';
import { CustomComponent } from '../models/custom-component';
import { CustomComponentDataObject } from '../models/custom-component-data-object';
import { CustomComponentType } from '../models/custom-component-type';
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
      this.createCustomComponent(component);
    });
  }

  createCustomComponent(customComponent: CustomComponent): CustomComponent {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        customComponent.component
      );

    const componentRef: ComponentRef<CustomComponentType> =
      this.controlHost.viewContainerRef.createComponent(componentFactory);
    const { instance, hostView } = componentRef;

    instance.data = customComponent.data;
    instance.removeComponentEvent.subscribe(() => {
      this.removeComponent(hostView);
    });

    // An element can be moved within the viewContainerRef using the move() function
    // e.g. this.controlHost.viewContainerRef.move(componentRef, 2);

    return customComponent;
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

    this.createCustomComponent(customComponent);
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

    this.createCustomComponent(customComponent);
  }

  removeComponent(componentRef: ViewRef) {
    const viewContainerRef = this.controlHost.viewContainerRef;
    const index = viewContainerRef.indexOf(componentRef);
    viewContainerRef.remove(index);
    this.formControlsLibaryService.removeComponent(index);
  }
}
