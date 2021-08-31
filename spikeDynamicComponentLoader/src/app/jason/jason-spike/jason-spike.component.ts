import { Component, OnInit } from '@angular/core';
import { ExecutionFormService } from '../../services/execution-form.service';

@Component({
  selector: 'app-jason-spike',
  templateUrl: './jason-spike.component.html',
  styleUrls: ['./jason-spike.component.scss']
})
export class JasonSpikeComponent implements OnInit {
  formData: any = [];
  constructor(private executionFormService: ExecutionFormService) { }

  ngOnInit(): void {
    this.formData = this.executionFormService.getExecutionForm();
  }
}
