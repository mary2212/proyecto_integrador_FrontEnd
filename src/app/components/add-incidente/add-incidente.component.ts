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
  //para mostrar informacion en la tabla
  incidentes: Incidente [] = [];

  //para los combobox
  edificios2: string [] = [];
  
  //ng model
  idEdificio2: number = -1;
  idDepartamento2: number = -1;
  estado: string= "";
  filtro: string = "";
  
  edificios: Edificio [] = [];
  departamentos: Departamento [] = [];
 

  idEdificio: number [] = [];
  idDepartamento: number [] = [];
  estado2: string [] = [];


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
    estado:""
  };

  listaEdificios: Edificio[] = [];
  listaDepartamanentos: Departamento[] = [];


  constructor(private incidenteService:IncidenteService, private edificioService:EdificioService, private departamentoService:DepartamentoService) { 
    this.edificioService.listaEdificio().subscribe(
      (x) => this.edificios = x
    );

    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamentos = x
    );

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

  busca(aux:Incidente){
    console.log("==> busca ==> incidente ==> "+ aux.idIncidente);
    this.incidente = aux;
  }

  registar(){
    this.incidenteService.registra(this.incidente).subscribe(
      (x) => {
        alert(x.mensaje);
        this.consulta();
      }
    );
  }

  actualiza(){
    this.incidenteService.actualiza(this.incidente).subscribe(
      response =>{
        alert(response.mensaje);

        this.incidenteService.consulta(this.filtro).subscribe(
          response => this.incidentes = response
        );

        this.incidente = {
          idIncidente:0,
          descripcion:"",
          fechaIncidente:"",
          departamento:{
            idDepartamento:0
          },
          edificio:{
            idEdificio:0,
          },
          estado:"",
        };
      }
    );    
  }

  cargaEdificio(){
    this.edificioService.listaEdificio().subscribe(
      (x) => this.edificios = x
    );
  }

  cargaDepartamento(){
    this.departamentoService.listaDepartamento().subscribe(
      (x) => this.departamentos = x
    );
  }

  listaIncidente(){
    this.incidenteService.listaIncidente(this.idDepartamento2, this.idDepartamento2).subscribe(
      (x) => {
        this.incidentes = x.lista;
        alert(x.mensaje);
      }
    );
  }

  listaIncidente2(){
    this.incidenteService.listaIncidente2(this.idEdificio2, this.idDepartamento2, this.estado).subscribe(
      (x) => {
        this.incidentes = x.lista;
        alert(x.mensaje);
      }
    );
  }

}
