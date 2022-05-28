import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Visita } from 'src/app/models/visita.model';
import { Visitante } from 'src/app/models/visitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { VisitaService } from 'src/app/services/visita.service';
import { VisitanteService } from 'src/app/services/visitante.service';


//prueba 


@Component({
  selector: 'app-add-visita',
  templateUrl: './add-visita.component.html',
  styleUrls: ['./add-visita.component.css']
})
export class AddVisitaComponent implements OnInit {

  visitas: Visita [] = [];
  filtro: string = "";
  filtro2: string = "";

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
  
  visitantes: Visitante [] = [];
  visitante: Visitante ={
    idVisitante:0,
    nombreVisitante:"",
    apellidoVisitante:"",
    dniVisitante:"",
    fechaRegistro:""
  }

  constructor(private visitaService: VisitaService, private visitanteService: VisitanteService, private departamentoService:DepartamentoService) {
    this.visitanteService.listaVisitante().subscribe(
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
 ///////////////////////////////VISITANTE///////////////////////////////////////////

 
  consultaVisitante(){
    console.log(" ==> consulta ==> filtro2 ==> " + this.filtro2);
    
    this.visitanteService.consulta(this.filtro2).subscribe(
      response => this.visitantes = response
    );
  }

  registraVisitante(){
    console.log(" ==> registra ==> filtro2 ==> " + this.visitante.idVisitante);
    console.log(" ==> registra ==> nombreVisitante ==> " + this.visitante.nombreVisitante);
    console.log(" ==> registra ==> apellidoVisitante ==> " + this.visitante.apellidoVisitante);
    console.log(" ==> registra ==> dniVisitante ==> " + this.visitante.dniVisitante);
    console.log(" ==> registra ==> fechaRegistro ==> " + this.visitante.fechaRegistro);
    
    this.visitanteService.registra(this.visitante).subscribe(
      response =>{
        alert(response.mensaje);

        this.visitanteService.consulta(this.filtro2).subscribe(
          response => this.visitantes = response
        );

        this.visitante = {
          idVisitante: 0,
          nombreVisitante: "",
          apellidoVisitante: "",
          dniVisitante:"",
          fechaRegistro: ""
        };

      }
    );
  }

  buscaVisitante(aux:Visitante){
    console.log("==> busca ==> idEdificio ==> " + aux.idVisitante);
    this.visitante = aux;
    
  }

  actualizaVisitante(){
    console.log(" ==> actualiza ==> filtro ==> " + this.visitante.idVisitante);
    console.log(" ==> actualiza ==> nombreVisitante ==> " + this.visitante.nombreVisitante);
    console.log(" ==> actualiza ==> apellidoVisitante ==> " + this.visitante.apellidoVisitante);
    console.log(" ==> actualiza ==> dniVisitante ==> " + this.visitante.dniVisitante);
    console.log(" ==> actualiza ==> fechaRegistro ==> " + this.visitante.fechaRegistro);
    
    this.visitanteService.actualiza(this.visitante).subscribe(
      response =>{
        alert(response.mensaje);

        this.visitanteService.consulta(this.filtro2).subscribe(
          response => this.visitantes = response
        );

        this.visitante = {
          idVisitante:0,
          nombreVisitante: "",
          apellidoVisitante: "",
          dniVisitante:"",
          fechaRegistro: ""
        };

      }
    );
  }

  eliminaVisitante(visitante:Visitante){
    this.visitanteService.elimina(visitante).subscribe(data=>{
      this.visitantes=this.visitantes.filter(e=>e!==visitante)
      alert("Eliminacion exitosa")
    })
    
  }

}
