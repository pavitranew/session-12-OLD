import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { VesselsComponent } from './vessels/vessels.component';
import { BindingComponent } from './binding/binding.component';
import { PiratesComponent } from './pirates/pirates.component';


@NgModule({
  declarations: [
    AppComponent,
    VesselsComponent,
    BindingComponent,
    PiratesComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
