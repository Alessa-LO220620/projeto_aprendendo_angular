import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponenteModule } from './componente/componente.module';
import { DirectivaModule } from './directiva/directiva.module';
import { FormularioModule } from './formulario/formulario.module';
import { HomeModule } from './home/home.module';
import { IntroducaoModule } from './introducao/introducao.module';
import { ServicosModule } from './servicos/servicos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    IntroducaoModule,
    ComponenteModule,
    ServicosModule,
    DirectivaModule,
    FormularioModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
