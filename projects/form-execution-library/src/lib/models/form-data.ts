import { RequiredControlData } from './control-component-type';

export interface CustomControl{
  type: any;
  data: RequiredControlData;
}

export interface ControlComponentType {
  formComponents: CustomControl[];
}

/*
"formComponents":
        [
          {
            "type":  "ColorPickerControlComponent",
            "parameters": [{
              "state": "purple",
              "config": '{required: true}',
              "id": "a8uisdofvlaiji32f8jpm"
            }
            ]
          },
          {
            "type":  "RiskControlComponent",
            "parameters": [{
              "state": "high",
              "config": '{colors: ["red", "yellow", "green"], severityLevels: ["high", "medium", "low"]}',
              "id": "8jfdaslio3289f0yvnp3"
            }
            ]
          }
        ]
    }
 */
