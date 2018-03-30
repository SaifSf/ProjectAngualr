import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
