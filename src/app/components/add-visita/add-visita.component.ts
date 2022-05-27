import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Visita } from 'src/app/models/visita.model';
import { Visitante } from 'src/app/models/visitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { VisitaService } from 'src/app/services/visita.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visita',
  templateUrl: './add-visita.component.html',
  styleUrls: ['./add-visita.component.css']
})
export class AddVisitaComponent implements OnInit {

  visitas: Visita [] = [];
  filtro: string = "";

  idVisitante: number [] = [];
  idDepartamento: number [] = [];

  visita: Visita = {
    idVisita:0,
    visitante:{
      idVisitante:0,
    },
    fechaEntrada: "",
    fechaSalida:"",
    estado:"",
    departamento:{
      idDepartamento:0,
    }
  }

  listaVisitantes: Visitante[] = [];
  listaDepartamentos: Departamento [] = []; 

  constructor(private visitaService: VisitaService, private visitantesService: VisitanteService, private departamentoService:DepartamentoService) {
    this.visitantesService.listaVisitante().subscribe(
      visitantes => this.listaVisitantes = visitantes
    );
    this.departamentoService.listaDepartamento().subscribe(
      departamentos => this.listaDepartamentos = departamentos
    );
   }

  ngOnInit(): void {
  }

  consulta(){
    console.log(" ==> consulta() ==> filtro " + this.filtro);

    this.visitaService.consulta(this.filtro).subscribe(
      response => this.visitas = response
    );
    
  }

}
