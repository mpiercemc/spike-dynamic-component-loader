import { NgModule } from '@angular/core';
import { FormControlFactoryService } from '../../../../src/app/shared/services/form-control-factory.service';
import { CustomComponent } from '../../../form-execution-library/src/lib/models/custom-component';
import { MatCardModule } from '@angular/material/card';
import { ColorsLibraryComponent } from '../public-api';
import { ComponentData } from 'projects/form-execution-library/src/lib/models/component-data';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ColorsLibraryComponent],
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  exports: [ColorsLibraryComponent],
})
export class ColorsLibraryModule {
  constructor(private formControlFactoryService: FormControlFactoryService) {
    /*
      We can rights check and only register components that the user has rights too here. (ex: which scrabble tiles should show up)
     */
    const shouldShowScrabbleTile = true;
    if (shouldShowScrabbleTile) {
      this.formControlFactoryService.registerComponentType(
        'ColorsLibraryComponent',
        this.getColorsComponentType
      );
    }
  }

  getColorsComponentType(data: ComponentData): CustomComponent {
    return new CustomComponent(ColorsLibraryComponent, data);
  }
}
