
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [ MatToolbarModule ],
  exports: [ HeaderComponent ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class HeaderModule {
  constructor() { }
}

