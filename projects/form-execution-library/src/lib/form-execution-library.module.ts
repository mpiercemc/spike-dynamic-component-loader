import { NgModule } from '@angular/core';
import { FormExecutionLibraryComponent } from './form-execution-library.component';
import { ControlHostDirective } from './directives/control-host.directive';
import {CoreModule} from "../../../../src/app/shared/core.module";

@NgModule({
  declarations: [
    FormExecutionLibraryComponent,
    ControlHostDirective
  ],
  imports: [
    CoreModule
  ],
  exports: [
    FormExecutionLibraryComponent,
  ]
})
export class FormExecutionLibraryModule { }
