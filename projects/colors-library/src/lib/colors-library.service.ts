import { Injectable } from '@angular/core';
import { FormControlFactoryService } from '../../../../src/app/mike/services/form-control-factory.service';
import { ColorsLibraryComponent } from './colors-library.component';
import { ControlComponent } from '../../../form-execution-library/src/lib/models/control-component';

@Injectable({
  providedIn: 'root'
})
export class ColorsLibraryService {
  constructor(private formControlFactoryService: FormControlFactoryService) {
    this.formControlFactoryService.registerComponentType('ColorsLibraryComponent', this.getColorsComponentType);
  }
  getColorsComponentType(data: any): ControlComponent{
    return new ControlComponent(ColorsLibraryComponent, data);
  }
}
