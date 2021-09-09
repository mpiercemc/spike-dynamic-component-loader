import { NgModule } from '@angular/core';
import { FormExecutionLibraryComponent } from './components/form-execution-library.component';
import { ControlHostDirective } from './directives/control-host.directive';
import { CoreModule } from '../../../../src/app/shared/core.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FormExecutionLibraryComponent, ControlHostDirective],
  imports: [CoreModule, MatButtonModule, MatIconModule],
  exports: [FormExecutionLibraryComponent],
})
export class FormExecutionLibraryModule {}
