import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { UrlifyPipe } from './urlify.pipe';
import { LangchangePipe } from './langchange.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UrlifyPipe,
    LangchangePipe
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
