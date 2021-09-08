import { NgModule } from '@angular/core';
import { ColorsLibraryComponent } from './colors-library.component';
import { FormControlFactoryService } from '../../../../src/app/shared/services/form-control-factory.service';
import { ControlComponent } from '../../../form-execution-library/src/lib/models/control-component';
import { ControlComponentType } from '../../../form-execution-library/src/lib/models/control-component-type';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ColorsLibraryComponent],
  imports: [MatCardModule],
  exports: [ColorsLibraryComponent],
})
export class ColorsLibraryModule {
  constructor(private formControlFactoryService: FormControlFactoryService) {
    this.formControlFactoryService.registerComponentType(
      'ColorsLibraryComponent',
      this.getColorsComponentType
    );
  }
  getColorsComponentType(data: ControlComponentType): ControlComponent {
    return new ControlComponent(ColorsLibraryComponent, data);
  }
}
