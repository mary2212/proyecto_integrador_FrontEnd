import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departamento } from 'src/app/models/departamento.model';
import { Edificio } from 'src/app/models/edificio.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';


@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit { 
 
  departamentos: Departamento [] = [];
  filtro: string = "";

  nomEdificio: string [] = [];

  departamento: Departamento = {
    idDepartamento:0,
    numeroDepartamento:0,
    piso:0,
    metrosCuadrados:0,
    edificio:{
      idEdificio:0,
      nomEdificio:"-1",
    },
    estado:""
    };

    listaEdificios: Edificio[] = [];
  /*cambio*/
  //validaciones
  depForm : FormGroup= this.formBuilder.group({
    numeroDepartamento:['',[Validators.required]],
    piso:['',[Validators.required]],
    metrosCuadrados:['',[Validators.required]],

  });
  submitted= false;
  /*cambio*/
   constructor(private departamentoService:DepartamentoService, private edificioService:EdificioService/*cambio*/, private formBuilder:FormBuilder/*cambio*/) {     
       this.edificioService.listaEdificio().subscribe(
         edificios => this.listaEdificios = edificios
       );
   }
  ngOnInit(): void {
  }

  consulta(){
    console.log(" ==> consulta() ==> filtro " + this.filtro);

    this.departamentoService.consulta(this.filtro).subscribe(
      response => this.departamentos = response
    );
    
  }

  registra(){
    console.log(" ==> registra ==> filtro ==>" + this.departamento.idDepartamento);
    console.log(" ==> registra ==> numeroDepartamento ==>" + this.departamento.numeroDepartamento);
    console.log(" ==> registra ==> piso ==>" + this.departamento.piso);
    console.log(" ==> registra ==> metrosCuadrados ==>" + this.departamento.metrosCuadrados);
    console.log(" ==> registra ==> edificio ==>" + this.departamento.edificio);
    console.log(" ==> registra ==> estado ==>" + this.departamento.estado);    

    /*cambio*/
    this.submitted=true;
    
    if(this.depForm.invalid){
      return;
    }
    /*cambio*/

    this.departamentoService.registra(this.departamento).subscribe(
      response =>{
        alert(response.mensaje);

        this.departamentoService.consulta(this.filtro).subscribe(
          response => this.departamentos = response
        );
          
        this.departamento = {
          idDepartamento:0,
          numeroDepartamento:0,
          piso:0,
          metrosCuadrados:0,
          edificio:{
            idEdificio:0,
            nomEdificio:"-1",
          },
          estado:""
          };
      }
    );

  }

  busca(aux:Departamento){
    console.log("==> busca ==> departamento ==> " + aux.idDepartamento);

    this.departamento = aux;
    
  }

  actualiza(){
    console.log(" ==> actualiza ==> filtro ==>" + this.departamento.idDepartamento);
    console.log(" ==> actualiza ==> numeroDepartamento ==>" + this.departamento.numeroDepartamento);
    console.log(" ==> actualiza ==> piso ==>" + this.departamento.piso);
    console.log(" ==> actualiza ==> metrosCuadrados ==>" + this.departamento.metrosCuadrados);
    console.log(" ==> actualiza ==> edificio ==>" + this.departamento.edificio);
    console.log(" ==> actualiza ==> estado ==>" + this.departamento.estado);    

    this.departamentoService.actualiza(this.departamento).subscribe(
      response =>{
        alert(response.mensaje);

        this.departamentoService.consulta(this.filtro).subscribe(
          response => this.departamentos = response
        );
          
        this.departamento = {
          idDepartamento:0,
          numeroDepartamento:0,
          piso:0,
          metrosCuadrados:0,
          edificio:{
            idEdificio:0,
            nomEdificio:"-1",
          },
          estado:""
          };
      }
    );

  }
  elimina(departamento:Departamento){
    this.departamentoService.elimina(departamento).subscribe(data=>{
      this.departamentos=this.departamentos.filter(e=>e!==departamento)
      alert("Eliminacion exitosa")
    })
    
  }  

}
