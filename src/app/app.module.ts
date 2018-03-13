import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ImageRowComponent } from './image-row/image-row.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageRowComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
