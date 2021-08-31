import { Injectable } from '@angular/core';
import { MikeExecutionFormServiceService } from './mike-execution-form-service.service';
import { CustomControl } from '../models/form-data';
import { ControlComponent } from '../models/control-component';
import { RiskControlComponent } from '../components/risk-control/risk-control.component';
import { ColorPickerControlComponent } from '../components/color-picker-control/color-picker-control.component';

@Injectable({
  providedIn: 'root'
})
export class FormControlFactoryService {

  componentLoaders = new Map();

  constructor() {
  }

  registerComponentType(type: string, componentLoader: Function){
    this.componentLoaders.set(type, componentLoader);
  }

  getComponent(formControlData: CustomControl): ControlComponent|any{
    return this.componentLoaders.get(formControlData.type)(formControlData.data);
  }

  // getRiskComponentType(data: any): ControlComponent{
  //   return new ControlComponent(RiskControlComponent, data);
  // }
  //
  // getColorPickerComponentType(data: any){
  //   return new ControlComponent(ColorPickerControlComponent, data);
  // }
}
