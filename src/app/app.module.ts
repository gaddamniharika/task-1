import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftChild } from './leftchild/leftchild.component';
import { RightChild } from './rightchild/rightchild.component';

@NgModule({
  declarations: [
    AppComponent,LeftChild,RightChild
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
