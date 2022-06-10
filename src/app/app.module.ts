import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEdificioComponent } from './components/add-edificio/add-edificio.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddOcupantesComponent } from './components/add-ocupantes/add-ocupantes.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { HeaderComponent } from './components/header/header.component';
import { AddVisitaComponent } from './components/add-visita/add-visita.component';
import { AddIncidenteComponent } from './components/add-incidente/add-incidente.component';

//mmmm
 
@NgModule({
  declarations: [
    AppComponent,
    AddEdificioComponent,
    AddDepartamentoComponent,
    AddPropietarioComponent,
    AddMascotaComponent,
    AddOcupantesComponent,
    UserLoginComponent,
    LoginComponent,
    SingupComponent,
    HeaderComponent,
    AddVisitaComponent,
    AddIncidenteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
