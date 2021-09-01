import { Injectable } from '@angular/core';
import { FormControlFactoryService } from '../../../../src/app/mike/services/form-control-factory.service';
import { RiskLibraryComponent } from './risk-library.component';
import { ControlComponent } from '../../../form-execution-library/src/lib/models/control-component';

@Injectable({
  providedIn: 'root'
})
export class RiskLibraryService {

  constructor(private formControlFactoryService: FormControlFactoryService) {
    this.formControlFactoryService.registerComponentType('RiskLibraryComponent', this.getRiskComponentType);
  }
  getRiskComponentType(data: any): ControlComponent{
    return new ControlComponent(RiskLibraryComponent, data);
  }
}
