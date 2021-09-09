import { Injectable } from '@angular/core';
import { CustomComponent } from '../models/custom-component';
import { LibraryExecutionFormServiceService } from './library-execution-form-service.service';
import { FormControlFactoryService } from '../../../../../src/app/shared/services/form-control-factory.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomComponentDataObject } from '../models/custom-component-data-object';

@Injectable({
  providedIn: 'root',
})
export class GetFormControlsLibraryService {
  private destroy$ = new Subject<void>();
  private componentList: CustomComponent[] = [];

  constructor(
    private executionFormService: LibraryExecutionFormServiceService,
    private formControlFactory: FormControlFactoryService
  ) {}

  getCustomComponents(): CustomComponent[] {
    this.executionFormService
      .getExecutionForm()
      .pipe(takeUntil(this.destroy$))
      .subscribe((components) =>
        components.forEach((component) => {
          this.componentList.push(
            this.formControlFactory.getComponent(component)
          );
        })
      );

    return this.componentList;
  }

  addComponent(
    componentDataObject: CustomComponentDataObject
  ): CustomComponent {
    this.executionFormService.addComponent(componentDataObject);

    const component: CustomComponent =
      this.formControlFactory.getComponent(componentDataObject);
    this.componentList.push(component);

    return component;
  }

  removeComponent(index: number) {
    this.componentList.splice(index, 1);
  }
}
