import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HasheeRootComponent } from './root.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdSlideToggleModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  declarations: [
    HasheeRootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [HasheeRootComponent]
})
export class HasheeModule { }
