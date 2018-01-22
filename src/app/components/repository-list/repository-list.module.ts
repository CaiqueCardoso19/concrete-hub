
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 

import { RepositoryListComponent } from './repository-list.component';
import { Utils } from '../../utils/utils.service';
import { Router } from '../../app.router';

@NgModule({
  declarations: [ RepositoryListComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatListModule,
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    Router
  ],
  exports: [ RepositoryListComponent ],
  providers: [ Utils, ],
  schemas: [ ]
})

export class RepositoryListModule { }
