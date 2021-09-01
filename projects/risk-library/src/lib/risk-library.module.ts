import { NgModule } from '@angular/core';
import { RiskLibraryComponent } from './risk-library.component';
import { RiskLibraryService } from './risk-library.service';
import {CoreModule} from "../../../../src/app/shared/core.module";



@NgModule({
  declarations: [
    RiskLibraryComponent
  ],
  imports: [
    CoreModule
  ],
  providers: [],
  exports: [
    RiskLibraryComponent
  ]
})
export class RiskLibraryModule {
  constructor(private riskLibraryService: RiskLibraryService) {
  }
}
