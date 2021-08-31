import { Component, OnInit } from '@angular/core';
import { ExecutionFormService } from '../../services/execution-form.service';

@Component({
  selector: 'app-mike-spike',
  templateUrl: './mike-spike.component.html',
  styleUrls: ['./mike-spike.component.scss']
})
export class MikeSpikeComponent implements OnInit {
  formData: any = [];
  constructor(private executionFormService: ExecutionFormService) { }

  ngOnInit(): void {
    this.formData = this.executionFormService.getExecutionForm();
  }
}
