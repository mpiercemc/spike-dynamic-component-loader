import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MikeSpikeComponent } from './mike/mike-spike/mike-spike.component';
import { RiskLibraryModule } from '../../projects/risk-library/src/lib/risk-library.module';
import { ColorsLibraryModule } from '../../projects/colors-library/src/lib/colors-library.module';
import { FormExecutionLibraryModule } from '../../projects/form-execution-library/src/lib/form-execution-library.module';

@NgModule({
  declarations: [
    AppComponent,
    MikeSpikeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RiskLibraryModule,
    ColorsLibraryModule,
    FormExecutionLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
  }
}
