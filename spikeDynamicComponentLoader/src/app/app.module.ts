import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldOneComponent } from './test-components/hello-world-one/hello-world-one.component';
import { HelloWorldTwoComponent } from './test-components/hello-world-two/hello-world-two.component';
import { JasonSpikeComponent } from './jason/jason-spike/jason-spike.component';
import { MikeSpikeComponent } from './mike/mike-spike/mike-spike.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldOneComponent,
    HelloWorldTwoComponent,
    JasonSpikeComponent,
    MikeSpikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
