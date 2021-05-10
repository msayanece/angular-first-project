import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherTestComponent } from './other-test/other-test.component';



@NgModule({
  declarations: [
    OtherTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OtherTestComponent
  ]
})
export class OtherModule { }
