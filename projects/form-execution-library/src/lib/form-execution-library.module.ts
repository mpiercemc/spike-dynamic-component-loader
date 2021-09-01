import { NgModule } from '@angular/core';
import { FormExecutionLibraryComponent } from './form-execution-library.component';
import { ControlHostDirective } from './directives/control-host.directive';

@NgModule({
  declarations: [
    FormExecutionLibraryComponent,
    ControlHostDirective
  ],
  imports: [
  ],
  exports: [
    FormExecutionLibraryComponent,
  ]
})
export class FormExecutionLibraryModule { }
