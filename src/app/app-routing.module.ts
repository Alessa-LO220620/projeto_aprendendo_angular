import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ComponenteRoutes } from "./componente/componente-routing.module";
import { DirectivaRoutes } from "./directiva/directiva-routing.module";
import { FormularioRoutes } from "./formulario/formulario-routing.module";
import { HomeRoutes } from "./home/home-routing.module";
import { IntroducaoRoutes } from "./introducao/introducao-routing.module";
import { ServicosRoutes } from "./servicos/servicos-routing.module";


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    ...HomeRoutes,
    ...IntroducaoRoutes,
    ...ComponenteRoutes,
    ...ServicosRoutes,
    ...DirectivaRoutes,
    ...FormularioRoutes

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
    exports:[RouterModule]
})

export class AppRoutingModule{}