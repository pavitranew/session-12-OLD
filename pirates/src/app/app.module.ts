import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VesselsComponent } from './vessels/vessels.component';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    VesselsComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [BindingComponent]
})
export class AppModule { }
