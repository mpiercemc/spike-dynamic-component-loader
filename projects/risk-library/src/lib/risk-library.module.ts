import { NgModule } from '@angular/core';
import { RiskLibraryComponent } from './components/risk-library.component';
import { CoreModule } from '../../../../src/app/shared/core.module';
import { FormControlFactoryService } from '../../../../src/app/shared/services/form-control-factory.service';
import { CustomComponent } from '../../../form-execution-library/src/lib/models/custom-component';
import { MatCardModule } from '@angular/material/card';
import { ComponentData } from 'projects/form-execution-library/src/lib/models/component-data';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RiskLibraryComponent],
  imports: [CoreModule, MatCardModule, MatIconModule, MatButtonModule],
  providers: [],
  exports: [RiskLibraryComponent],
})
export class RiskLibraryModule {
  constructor(private formControlFactoryService: FormControlFactoryService) {
    this.formControlFactoryService.registerComponentType(
      'RiskLibraryComponent',
      this.getRiskComponentType
    );
  }

  getRiskComponentType(data: ComponentData): CustomComponent {
    return new CustomComponent(RiskLibraryComponent, data);
  }
}
