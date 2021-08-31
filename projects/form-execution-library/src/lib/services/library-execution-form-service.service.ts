import { Injectable } from '@angular/core';
import { ControlComponentType } from '../models/form-data';

@Injectable({
  providedIn: 'root'
})
export class LibraryExecutionFormServiceService {

  constructor() { }

  getExecutionForm(): ControlComponentType {
    return {
      "formComponents":
        [
          {
            "type":  "RiskLibraryComponent",
            "data": {
              "state": "holy smokes",
              "config": '{isLibrary: true, isAwesome: true}',
              "id": "ffr43qwg3fsdg4g4ep4"
            }
          },
          {
            "type":  "ColorsLibraryComponent",
            "data": {
              "state": "I'm Colors Library",
              "config": '{isLibrary: true, isAwesome: true}',
              "id": "dfaf3awmpsdcksmaf323g"
            }
          }
        ]
    }
  }
}
