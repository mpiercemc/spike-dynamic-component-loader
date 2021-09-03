import { Injectable } from '@angular/core';
import { ControlComponent } from '../models/control-component';
import { LibraryExecutionFormServiceService } from './library-execution-form-service.service';
import { FormControlFactoryService } from '../../../../../src/app/shared/services/form-control-factory.service';
import { Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';
import { CustomControl } from '../models/form-data';

@Injectable({
  providedIn: 'root',
})
export class GetFormControlsLibraryService {
  private destroy$ = new Subject<void>();

  constructor(
    private executionFormService: LibraryExecutionFormServiceService,
    private formControlFactory: FormControlFactoryService
  ) {}

  getFormControls(): ControlComponent[] {
    let controls: ControlComponent[] = [];

    this.executionFormService
      .getExecutionForm()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ formComponents }) =>
        formComponents.forEach((control) => {
          controls.push(this.formControlFactory.getComponent(control));
        })
      );

    return controls;
  }

  addComponent<T extends CustomControl>(component: T) {
    this.executionFormService.addComponent(component);
  }
}
