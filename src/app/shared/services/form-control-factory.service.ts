/*
  TODO: this service needs to be loaded at the root, and be available within libraries through a shared module
  TODO: Figure out if registering multiple components at runtime increases the build size? Specifically what happens
   lazy loaded modules, can we still get size benefits
 */

import { Injectable, Optional, SkipSelf } from '@angular/core';
import { CustomComponentDataObject } from '../../../../projects/form-execution-library/src/lib/models/custom-component-data-object';
import { CustomComponent } from '../../../../projects/form-execution-library/src/lib/models/custom-component';
import { CoreModule } from '../core.module';
import { ComponentData } from 'projects/form-execution-library/src/lib/models/component-data';

interface GetControlComponentFunc {
  (data: ComponentData): CustomComponent;
}

@Injectable({
  providedIn: 'root',
})
export class FormControlFactoryService {
  componentLoaders = new Map();

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'FormControlFactoryService is already loaded. Import it in the AppModule only'
      );
    }
  }

  registerComponentType(
    type: string,
    componentLoader: GetControlComponentFunc
  ) {
    this.componentLoaders.set(type, componentLoader);
  }

  getComponent(
    componentDataObject: CustomComponentDataObject
  ): CustomComponent | any {
    return this.componentLoaders.get(componentDataObject.type)(
      componentDataObject.data
    );
  }
}
