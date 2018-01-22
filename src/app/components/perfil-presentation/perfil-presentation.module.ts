
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { PerfilPresentationComponent } from './perfil-presentation.component';

@NgModule({
  declarations: [ PerfilPresentationComponent ],
  imports: [  CommonModule,
              MatCardModule
  ],
  exports: [ PerfilPresentationComponent ],
  providers: [ ],
  schemas: [ ]
})

export class PerfilPresentarionModule {
  constructor() { }
}
