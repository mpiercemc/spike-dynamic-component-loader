import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ControlComponentType, CustomControl } from '../models/form-data';

@Injectable({
  providedIn: 'root',
})
export class LibraryExecutionFormServiceService {
  private data = {
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

  getExecutionForm(): Observable<ControlComponentType> {
    return of(this.data);
  }

  addComponent(component: CustomControl) {
    this.data.formComponents.push(component);
  }
}
