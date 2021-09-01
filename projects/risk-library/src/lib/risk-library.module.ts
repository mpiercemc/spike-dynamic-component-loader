import { NgModule } from '@angular/core';
import { RiskLibraryComponent } from './risk-library.component';
import { FormControlFactoryService } from '../../../../src/app/mike/services/form-control-factory.service';
import { RiskLibraryService } from './risk-library.service';



@NgModule({
  declarations: [
    RiskLibraryComponent
  ],
  imports: [
  ],
  providers: [
    FormControlFactoryService
  ],
  exports: [
    RiskLibraryComponent
  ]
})
export class RiskLibraryModule {
  constructor(private riskLibraryService: RiskLibraryService) {
  }
}
