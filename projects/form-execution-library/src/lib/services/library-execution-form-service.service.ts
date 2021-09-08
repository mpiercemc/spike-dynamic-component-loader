import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ControlComponentType, CustomControl } from '../models/form-data';

const data = {
  formComponents: [
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
  ],
};

@Injectable({
  providedIn: 'root',
})
export class LibraryExecutionFormServiceService {
  getExecutionForm(): Observable<ControlComponentType> {
    return of(data);
  }

  addComponent(component: CustomControl) {
    data.formComponents.push(component);
  }
}
