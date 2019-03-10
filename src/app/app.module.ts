import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TopFieldComponent } from './top-field/top-field.component';
import { PoDetailsComponent } from './po-details/po-details.component';
import { LineDetailsComponent } from './line-details/line-details.component';
import { AdditionalLineDetailsComponent } from './additional-line-details/additional-line-details.component';
import { DisplayPadComponent } from './display-pad/display-pad.component';

@NgModule({
  declarations: [
    AppComponent,
    TopFieldComponent,
    PoDetailsComponent,
    LineDetailsComponent,
    AdditionalLineDetailsComponent,
    DisplayPadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
