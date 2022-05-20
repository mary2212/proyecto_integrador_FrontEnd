import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Ocupantes } from 'src/app/models/ocupantes.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { OcupantesService } from 'src/app/services/ocupantes.service';

@Component({
  selector: 'app-add-ocupantes',
  templateUrl: './add-ocupantes.component.html',
  styleUrls: ['./add-ocupantes.component.css']
})
export class AddOcupantesComponent implements OnInit {

  ocupante: Ocupantes [] = [];
  filtro: string = "";

  numeroDepartamento: string [] = [];

  ocupantes: Ocupantes = {
    idOcupante:0,
    nombreOcupante:"",
    apellidoOcupante:"",
    dniOcupante:"",
    sexo:"",
    departamento:{
      idDepartamento:0,
      numeroDepartamento:0
    }
  };

  listaDepartamentos: Departamento[] = [];

  constructor(private ocupantesService:OcupantesService,private departamentoService:DepartamentoService) { 
    this.departamentoService.listaDepartamento().subscribe(
      departamentos => this.listaDepartamentos = departamentos
    );
  }

  ngOnInit(): void {
  }

  consulta(){
    console.log(" ==> consulta() ==> filtro " + this.filtro);

    this.ocupantesService.consulta(this.filtro).subscribe(
      response => this.ocupante = response
    );
    
  }

  registra(){
    console.log(" ==> registra ==> filtro ==>" + this.ocupantes.idOcupante);
    console.log(" ==> registra ==> nombreOcupante ==>" + this.ocupantes.nombreOcupante);
    console.log(" ==> registra ==> apellidoOcupante ==>" + this.ocupantes.apellidoOcupante);   
    console.log(" ==> registra ==> dniOcupante ==>" + this.ocupantes.dniOcupante);
    console.log(" ==> registra ==> sexo ==>" + this.ocupantes.sexo);      
    console.log(" ==> registra ==> departamento ==>" + this.ocupantes.departamento);   

    this.ocupantesService.registra(this.ocupantes).subscribe(
      response =>{
        alert(response.mensaje);

        this.ocupantesService.consulta(this.filtro).subscribe(
          response => this.ocupante = response
        );
          
        this.ocupantes = {
          idOcupante:0,
          nombreOcupante:"",
          apellidoOcupante:"",
          dniOcupante:"",
          sexo:"",
          departamento:{
            idDepartamento:0,
          },
          };
      }
    );

  }

  busca(aux:Ocupantes){
    console.log("==> busca ==> ocupantes ==> " + aux.idOcupante);

    this.ocupantes = aux;
    
  }

  actualiza(){
    console.log(" ==> actualiza ==> filtro ==>" + this.ocupantes.idOcupante);
    console.log(" ==> actualiza ==> nombreOcupante ==>" + this.ocupantes.nombreOcupante);
    console.log(" ==> actualiza ==> apellidoOcupante ==>" + this.ocupantes.apellidoOcupante);   
    console.log(" ==> actualiza ==> dniOcupante ==>" + this.ocupantes.dniOcupante);
    console.log(" ==> actualiza ==> sexo ==>" + this.ocupantes.sexo);      
    console.log(" ==> actualiza ==> departamento ==>" + this.ocupantes.departamento);   

    this.ocupantesService.actualiza(this.ocupantes).subscribe(
      response =>{
        alert(response.mensaje);

        this.ocupantesService.consulta(this.filtro).subscribe(
          response => this.ocupante = response
        );
          
        this.ocupantes = {
          idOcupante:0,
          nombreOcupante:"",
          apellidoOcupante:"",
          dniOcupante:"",
          sexo:"",
          departamento:{
            idDepartamento:0,
          },
          };
      }
    );

  }

  elimina(ocupantes:Ocupantes){
    this.ocupantesService.elimina(ocupantes).subscribe(data=>{
      this.ocupante=this.ocupante.filter(e=>e!==ocupantes)
      alert("Eliminacion exitosa")
    })
    
  } 

}
