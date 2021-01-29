import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeComponent } from './tree/tree.component';
import { MatButtonModule } from '@angular/material/button/';
import { MatToolbarModule } from '@angular/material/toolbar/';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
      TreeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
