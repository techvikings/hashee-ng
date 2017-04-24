// Angular basic modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Material Design modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdSlideToggleModule,
  MdTabsModule
} from '@angular/material';
import 'hammerjs';

// View components
import {MainViewComponent} from './main.view';
import {PlaintextViewComponent} from './plaintext.view';
import {HexViewComponent} from './hex.view';

@NgModule({
  declarations: [
    MainViewComponent,
    PlaintextViewComponent,
    HexViewComponent
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
  bootstrap: [
    MainViewComponent
  ]
})
export class ViewsModule {
}
