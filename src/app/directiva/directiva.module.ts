import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './directiva.component';



@NgModule({
  declarations: [
    DirectivaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivaComponent
  ]
})
export class DirectivaModule { }
