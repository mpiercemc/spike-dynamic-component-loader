import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { ControlHostDirective } from '../directives/control-host.directive';
import { GetFormControlsService } from '../services/get-form-controls.service';
import { ControlComponent } from '../models/control-component';


@Component({
  selector: 'app-mike-spike',
  templateUrl: './mike-spike.component.html',
  styleUrls: ['./mike-spike.component.scss']
})
export class MikeSpikeComponent implements OnInit {
  formData: any = [];
  @ViewChild(ControlHostDirective, {static: true}) controlHost!: ControlHostDirective;
  interval: number | undefined;

  constructor(private formControlsService: GetFormControlsService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    let formControls = this.formControlsService.getFormControls();

    this.dynamicallyLoadComponent(formControls[0]);
  }

  dynamicallyLoadComponent(formComponent: ControlComponent) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(formComponent.component);

    const viewContainerRef = this.controlHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<ControlComponent>(componentFactory);
    componentRef.instance.data = formComponent.data;
  }
}
