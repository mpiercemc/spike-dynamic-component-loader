import { Injectable } from '@angular/core';
import { ControlComponent } from '../models/control-component';
import { RiskControlComponent } from '../components/risk-control/risk-control.component';
import { MikeExecutionFormServiceService } from './mike-execution-form-service.service';
import { ControlComponentType, CustomControl } from '../models/form-data';
import { ColorPickerControlComponent } from '../components/color-picker-control/color-picker-control.component';
import { FormControlFactoryService } from './form-control-factory.service';

@Injectable({
  providedIn: 'root'
})
export class GetFormControlsService {
  constructor(private executionFormService: MikeExecutionFormServiceService, private formControlFactory: FormControlFactoryService) {
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
