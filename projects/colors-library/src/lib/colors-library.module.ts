import { NgModule } from '@angular/core';
import { ColorsLibraryComponent } from './colors-library.component';
import { ColorsLibraryService } from './colors-library.service';



@NgModule({
  declarations: [
    ColorsLibraryComponent
  ],
  imports: [
  ],
  exports: [
    ColorsLibraryComponent
  ]
})
export class ColorsLibraryModule {
  constructor(private colorsLibraryService:ColorsLibraryService) {
  }
}
