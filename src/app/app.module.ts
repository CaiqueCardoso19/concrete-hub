
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RepositoryListModule } from './components/repository-list/repository-list.module';
import { PerfilPresentarionModule } from './components/perfil-presentation/perfil-presentation.module';
import { ServiceUtil } from './shared/service';
import { Utils } from './utils/utils.service';
import { Router } from './app.router';
import { HomeComponent } from './home/home.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepositoryDetailComponent,
  ],
  imports: [
    RepositoryListModule,
    HeaderModule,
    PerfilPresentarionModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    Router
  ],
  providers: [
    ServiceUtil,
    Utils
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
