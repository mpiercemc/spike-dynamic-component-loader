import { NgModule } from '@angular/core';
import { ColorsLibraryComponent } from './colors-library.component';
import { FormControlFactoryService } from '../../../../src/app/shared/services/form-control-factory.service';
import { ControlComponent } from '../../../form-execution-library/src/lib/models/control-component';



@NgModule({
  declarations: [
    ColorsLibraryComponent
  ],
  imports: [
  ],
  exports: [
    ColorsLibraryComponent
  ]
})
export class ColorsLibraryModule {
  constructor(private formControlFactoryService: FormControlFactoryService) {
    this.formControlFactoryService.registerComponentType('ColorsLibraryComponent', this.getColorsComponentType);
  }
  getColorsComponentType(data: any): ControlComponent{
    return new ControlComponent(ColorsLibraryComponent, data);
  }
}
