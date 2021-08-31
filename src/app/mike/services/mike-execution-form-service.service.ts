import { Injectable } from '@angular/core';
import { ControlComponentType } from '../models/form-data';

@Injectable({
  providedIn: 'root'
})
export class MikeExecutionFormServiceService {

  constructor() { }

  getExecutionForm(): ControlComponentType {
    return {
      "formComponents":
        [
          {
            "type":  "ColorPickerControlComponent",
            "data": {
              "state": "purple",
              "config": '{required: true}',
              "id": "a8uisdofvlaiji32f8jpm"
            }
          },
          {
            "type":  "RiskControlComponent",
            "data": {
              "state": "high",
              "config": '{colors: ["red", "yellow", "green"], severityLevels: ["high", "medium", "low"]}',
              "id": "8jfdaslio3289f0yvnp3"
            }
          }
        ]
    }
  }
}
