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

import {Ng2FileInputModule} from 'ng2-file-input';

// View components
import {MainViewComponent} from './main.view';
import {PlaintextViewComponent} from './plaintext.view';
import {HexViewComponent} from './hex.view';
import {BinaryViewComponent} from './binary.view';

@NgModule({
  declarations: [
    MainViewComponent,
    PlaintextViewComponent,
    HexViewComponent,
    BinaryViewComponent
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
    MdIconModule,
    Ng2FileInputModule.forRoot({
      dropText: 'Drop file here',
      browseText: 'Browse',
      removeText: 'Remove',
      invalidFileText: 'You have picked an invalid or disallowed file.',
      invalidFileTimeout: 8000,
      removable: true,
      multiple: false,
      showPreviews: false
    })
  ],
  providers: [],
  bootstrap: [
    MainViewComponent
  ]
})
export class ViewsModule {
}
