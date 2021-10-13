import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ServicosComponent
  ]
})
export class ServicosModule { }
