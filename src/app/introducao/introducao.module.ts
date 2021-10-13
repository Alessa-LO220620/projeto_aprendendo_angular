import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroducaoComponent } from './introducao.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IntroducaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports:[
    IntroducaoComponent
  ]
})
export class IntroducaoModule { }
