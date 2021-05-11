import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { ForIfComponent } from './for-if/for-if.component';
import { NgoninitPassingParamComponent } from './ngoninit-passing-param/ngoninit-passing-param.component';
import { ObjectInputComponent } from './object-input/object-input.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LogService } from './log.service';
import { ButtonClickComponent } from './button-click/button-click.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { OtherModule } from './other/other.module';
import { HttpCallComponent } from './http-call/http-call.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    ForIfComponent,
    NgoninitPassingParamComponent,
    ObjectInputComponent,
    LifeCycleComponent,
    ButtonClickComponent,
    TwoWayDataBindingComponent,
    HttpCallComponent
  ],
  imports: [
    BrowserModule, FormsModule, OtherModule, HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
