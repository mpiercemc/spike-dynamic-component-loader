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

  constructor(
    private executionFormService: LibraryExecutionFormServiceService,
    private formControlFactory: FormControlFactoryService
  ) {}

  getFormControls(): CustomComponent[] {
    const componentList: CustomComponent[] = [];

    this.executionFormService
      .getExecutionForm()
      .pipe(takeUntil(this.destroy$))
      .subscribe((components) =>
        components.forEach((component) => {
          componentList.push(this.formControlFactory.getComponent(component));
        })
      );

    return componentList;
  }

  addComponent(componentDataObject: CustomComponentDataObject) {
    this.executionFormService.addComponent(componentDataObject);
  }
}
