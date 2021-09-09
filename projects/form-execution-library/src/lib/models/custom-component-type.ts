import { ComponentData } from './component-data';
import { ControlValueAccessor } from '@angular/forms';

/*
  This is where you can create a contract about functionality a component must have in order to register with your
  domain registry. ex: undo/redo, ControlValueAccessor, configForScrabbleTileLayout etc.
 */
export interface CustomComponentType extends ControlValueAccessor {
  data: ComponentData;
}
