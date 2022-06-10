import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Edificio } from 'src/app/models/edificio.model';
import { Incidente } from 'src/app/models/incidente.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { IncidenteService } from 'src/app/services/incidente.service';

@Component({
  selector: 'app-add-incidente',
  templateUrl: './add-incidente.component.html',
  styleUrls: ['./add-incidente.component.css']
})
export class AddIncidenteComponent implements OnInit {

  incidentes: Incidente [] = [];
  filtro: string = "";

  idEdificio: number [] = [];
  idDepartamento: number [] = [];
 
  incidente: Incidente = {
    idIncidente:0,
    descripcion:"",
    fechaIncidente:"",
    departamento:{
      idDepartamento:0,
    },
    edificio:{
      idEdificio:0,
    },
    estado:0
  };

  listaEdificios: Edificio[] = [];
  listaDepartamanentos: Departamento[] = [];

  constructor(private incidenteService:IncidenteService, private edificioService:EdificioService, private departamentoService:DepartamentoService) { 
    this.edificioService.listaEdificio().subscribe(
      edificios => this.listaEdificios = edificios
    );

    this.departamentoService.listaDepartamento().subscribe(
      departamentos => this.listaDepartamanentos = departamentos
    );
  }

  ngOnInit(): void {
  }

  consulta(){
    console.log(" ==> consulta() ==> filtro "+this.filtro);

    this.incidenteService.consulta(this.filtro).subscribe(
      response => this.incidentes = response
    );
    
  }

  listaIncidente(){

  }




  registra(){
    console.log(" ==> registra ==> idIncidente ==>" + this.incidente.idIncidente);
    console.log(" ==> registra ==> descripcion ==>" + this.incidente.descripcion);
    console.log(" ==> registra ==> fechaIncidente ==>" + this.incidente.fechaIncidente);
    console.log(" ==> registra ==> departamento ==>" + this.incidente.departamento);
    console.log(" ==> registra ==> edificio ==>" + this.incidente.edificio);
    console.log(" ==> registra ==> estado ==>" + this.incidente.estado);
    
    this.incidenteService.registra(this.incidente).subscribe(
      response =>{
        alert(response.mensaje);

        this.incidenteService.consulta(this.filtro).subscribe(
          response => this.incidentes = response
        );

        this.incidente={
          idIncidente:0,
          descripcion:"",
          fechaIncidente:"",
          departamento:{
            idDepartamento:0,
          },
          edificio:{
            idEdificio:0,
          },
          estado:0
        };
      }
    );
  }

}
