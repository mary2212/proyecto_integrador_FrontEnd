import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddEdificioComponent } from './components/add-edificio/add-edificio.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddOcupantesComponent } from './components/add-ocupantes/add-ocupantes.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddVisitaComponent } from './components/add-visita/add-visita.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SingupComponent},
  { path: 'userLogin', component: UserLoginComponent},
  { path: "addEdificio", component: AddEdificioComponent},
  { path: "addDepartamento", component: AddDepartamentoComponent},
  { path: "addMascota", component: AddMascotaComponent},
  { path: "addOcupantes", component: AddOcupantesComponent},
  { path: "addPropietario", component: AddPropietarioComponent},
  { path: "addVisita", component: AddVisitaComponent},
  { path: "header", component : HeaderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }