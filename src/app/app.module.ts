import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MikeSpikeComponent } from './mike/mike-spike/mike-spike.component';
import { RiskLibraryModule } from '../../projects/risk-library/src/lib/risk-library.module';
import { ColorsLibraryModule } from '../../projects/colors-library/src/lib/colors-library.module';
import { FormExecutionLibraryModule } from '../../projects/form-execution-library/src/lib/form-execution-library.module';
import { CoreModule } from './shared/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, MikeSpikeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RiskLibraryModule,
    ColorsLibraryModule,
    FormExecutionLibraryModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
