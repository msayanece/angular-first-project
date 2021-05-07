import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { ForIfComponent } from './for-if/for-if.component';
import { NgoninitPassingParamComponent } from './ngoninit-passing-param/ngoninit-passing-param.component';
import { ObjectInputComponent } from './object-input/object-input.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    ForIfComponent,
    NgoninitPassingParamComponent,
    ObjectInputComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
