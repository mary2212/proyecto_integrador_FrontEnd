import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddEdificioComponent } from './components/add-edificio/add-edificio.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddOcupantesComponent } from './components/add-ocupantes/add-ocupantes.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { LoginuserService } from './services/loginuser.service';

const routes: Routes = [
  {path: '', redirectTo:'userLogin',pathMatch:'full'},
  { path:"userLogin", component:LoginuserService},
  { path:"addEdificio", component: AddEdificioComponent},
  { path:"addModalidad", component: AddDepartamentoComponent},
  { path:"addMascota", component: AddMascotaComponent},
  { path:"addOcupantes", component: AddOcupantesComponent},
  { path:"addPropietario", component: AddPropietarioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
