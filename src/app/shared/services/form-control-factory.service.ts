/*
  TODO: this service needs to be loaded at the root, and be available within libraries through a shared module
  TODO: Figure out if registering multiple components at runtime increases the build size? Specifically what happens
   lazy loaded modules, can we still get size benefits
 */

import {Injectable, Optional, SkipSelf} from '@angular/core';
import { CustomControl } from '../../../../projects/form-execution-library/src/lib/models/form-data';
import { ControlComponent } from '../../../../projects/form-execution-library/src/lib/models/control-component';
import {CoreModule} from "../core.module";

@Injectable({
  providedIn: 'root'
})
export class FormControlFactoryService {

  componentLoaders = new Map();

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  registerComponentType(type: string, componentLoader: Function){
    this.componentLoaders.set(type, componentLoader);
  }

  getComponent(formControlData: CustomControl): ControlComponent|any{
    return this.componentLoaders.get(formControlData.type)(formControlData.data);
  }
}
