import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonasComponent } from './pages/personas/crear-personas/crear-personas.component';
import { ListarPersonaComponent } from './pages/personas/listar-persona/listar-persona.component';

const routes: Routes = [
  { path: "personas/list", component: ListarPersonaComponent},
  { path: "personas/create", component: CrearPersonasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
