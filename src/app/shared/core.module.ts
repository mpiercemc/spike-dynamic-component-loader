import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormControlFactoryService } from './services/form-control-factory.service';

@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [FormControlFactoryService],
    };
  }
}
