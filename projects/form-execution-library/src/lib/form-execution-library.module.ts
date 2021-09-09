import { NgModule } from '@angular/core';
import { FormExecutionLibraryComponent } from './components/form-execution-library.component';
import { ControlHostDirective } from './directives/control-host.directive';
import { CoreModule } from '../../../../src/app/shared/core.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FormExecutionLibraryComponent, ControlHostDirective],
  imports: [CoreModule, MatButtonModule],
  exports: [FormExecutionLibraryComponent],
})
export class FormExecutionLibraryModule {}
