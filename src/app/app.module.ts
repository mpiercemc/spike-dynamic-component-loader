import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldOneComponent } from './test-components/hello-world-one/hello-world-one.component';
import { HelloWorldTwoComponent } from './test-components/hello-world-two/hello-world-two.component';
import { JasonSpikeComponent } from './jason/jason-spike/jason-spike.component';
import { MikeSpikeComponent } from './mike/mike-spike/mike-spike.component';
import { ControlHostDirective } from './mike/directives/control-host.directive';
import { RiskControlComponent } from './mike/components/risk-control/risk-control.component';
import { ColorPickerControlComponent } from './mike/components/color-picker-control/color-picker-control.component';
import { FormControlFactoryService } from './mike/services/form-control-factory.service';
import { ControlComponent } from './mike/models/control-component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldOneComponent,
    HelloWorldTwoComponent,
    JasonSpikeComponent,
    MikeSpikeComponent,
    ControlHostDirective,
    RiskControlComponent,
    ColorPickerControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private formControlFactoryService: FormControlFactoryService) {
    this.formControlFactoryService.registerComponentType('RiskControlComponent', this.getRiskComponentType);
    this.formControlFactoryService.registerComponentType('ColorPickerControlComponent', this.getColorPickerComponentType);
  }
  getRiskComponentType(data: any): ControlComponent{
    return new ControlComponent(RiskControlComponent, data);
  }

  getColorPickerComponentType(data: any){
    return new ControlComponent(ColorPickerControlComponent, data);
  }
}
