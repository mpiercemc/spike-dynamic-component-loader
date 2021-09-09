import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomComponentDataObject } from '../models/custom-component-data-object';

const data: CustomComponentDataObject[] = [
  {
    type: 'RiskLibraryComponent',
    data: {
      state: 'holy smokes',
      config: '{isLibrary: true, isAwesome: true}',
      id: 'ffr43qwg3fsdg4g4ep4',
    },
  },
  {
    type: 'ColorsLibraryComponent',
    data: {
      state: "I'm Colors Library",
      config: '{isLibrary: true, isAwesome: true}',
      id: 'dfaf3awmpsdcksmaf323g',
    },
  },
];
@Injectable({
  providedIn: 'root',
})
export class LibraryExecutionFormServiceService {
  getExecutionForm(): Observable<CustomComponentDataObject[]> {
    return of(data);
  }

  addComponent(componentDataObject: CustomComponentDataObject) {
    data.push(componentDataObject);
  }
}
