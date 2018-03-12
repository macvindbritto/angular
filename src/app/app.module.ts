import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageRowComponent } from './image-row/image-row.component';
import { ImageRowComponent1 } from './image-row/image-row.component1';


@NgModule({
  declarations: [
    AppComponent,
    ImageRowComponent,
    ImageRowComponent1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
