import { Injectable } from '@angular/core';
import { ControlComponent } from '../models/control-component';
import {
  LibraryExecutionFormServiceService,
} from './library-execution-form-service.service';
import { ControlComponentType } from '../models/form-data';
import { FormControlFactoryService } from '../../../../../src/app/shared/services/form-control-factory.service';

@Injectable({
  providedIn: 'root'
})
export class GetFormControlsLibraryService {
  constructor(private executionFormService: LibraryExecutionFormServiceService, private formControlFactory: FormControlFactoryService) {
  }

  getFormControls(): ControlComponent[]{
    let controls: ControlComponent[] = [];
    let formControlData: ControlComponentType = this.executionFormService.getExecutionForm();
    for(const control of formControlData.formComponents){
      controls.push(this.formControlFactory.getComponent(control));
    }
    return controls;
  }
}
