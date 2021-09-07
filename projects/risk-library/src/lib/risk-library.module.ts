import { NgModule } from '@angular/core';
import { RiskLibraryComponent } from './risk-library.component';
import { CoreModule } from "../../../../src/app/shared/core.module";
import { FormControlFactoryService } from '../../../../src/app/shared/services/form-control-factory.service';
import {
  ControlComponent,
} from '../../../form-execution-library/src/lib/models/control-component';
import { ControlComponentType } from '../../../form-execution-library/src/lib/models/control-component-type';



@NgModule({
  declarations: [
    RiskLibraryComponent
  ],
  imports: [
    CoreModule
  ],
  providers: [],
  exports: [
    RiskLibraryComponent
  ]
})
export class RiskLibraryModule {
  constructor(private formControlFactoryService: FormControlFactoryService) {
    this.formControlFactoryService.registerComponentType('RiskLibraryComponent', this.getRiskComponentType);
  }
  getRiskComponentType(data: ControlComponentType): ControlComponent {
    return new ControlComponent(RiskLibraryComponent, data);
  }
}
