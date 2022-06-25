import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Edificio } from 'src/app/models/edificio.model';
import { EdificioService } from 'src/app/services/edificio.service';

@Component({
  selector: 'app-add-edificio',
  templateUrl: './add-edificio.component.html',
  styleUrls: ['./add-edificio.component.css']
})



export class AddEdificioComponent implements OnInit {

  edificios: Edificio [] = [];
  filtro: string = "";

  edificio: Edificio ={
    idEdificio: 0,
    nomEdificio: "",
    numPisos: "",
    fechaRegistro: ""
  };
  /*cambio*/
  //validaciones
  ediForm : FormGroup= this.formBuilder.group({
    nomEdificio:['',[Validators.required]],
    numPisos:['',[Validators.required]],

  });
  submitted= false;
  /*cambio*/
  constructor(private edificioService:EdificioService/*cambio*/, private formBuilder:FormBuilder/*cambio*/) { }   


  ngOnInit(): void {
  }

  consulta(){
    console.log(" ==> consulta ==> filtro ==> " + this.filtro);
    
    this.edificioService.consulta(this.filtro).subscribe(
        response => this.edificios = response
    );
  }

  registra(){
    console.log(" ==> registra ==> filtro ==> " + this.edificio.idEdificio);
    console.log(" ==> registra ==> nomEdificio ==> " + this.edificio.nomEdificio);
    console.log(" ==> registra ==> numPisos ==> " + this.edificio.numPisos);
    console.log(" ==> registra ==> fechaRegistro ==> " + this.edificio.fechaRegistro);

    /*cambio*/
    this.submitted=true;
    
    if(this.ediForm.invalid){
      return;
    }
    /*cambio*/
    
    this.edificioService.registra(this.edificio).subscribe(
      response =>{
        alert(response.mensaje);

        this.edificioService.consulta(this.filtro).subscribe(
          response => this.edificios = response
        );

        this.edificio = {
          idEdificio: 0,
          nomEdificio: "",
          numPisos: "",
          fechaRegistro: ""
        };

      }
    );
  }

  busca(aux:Edificio){
    console.log("==> busca ==> idEdificio ==> " + aux.idEdificio);
    this.edificio = aux;
    
  }

  actualiza(){
    console.log(" ==> actualiza ==> filtro ==> " + this.edificio.idEdificio);
    console.log(" ==> actualiza ==> nomEdificio ==> " + this.edificio.nomEdificio);
    console.log(" ==> actualiza ==> numPisos ==> " + this.edificio.numPisos);
    console.log(" ==> actualiza ==> fechaRegistro ==> " + this.edificio.fechaRegistro);
    
    this.edificioService.actualiza(this.edificio).subscribe(
      response =>{
        alert(response.mensaje);

        this.edificioService.consulta(this.filtro).subscribe(
          response => this.edificios = response
        );

        this.edificio = {
          idEdificio: 0,
          nomEdificio: "",
          numPisos: "",
          fechaRegistro: ""
        };

      }
    );
  }

  elimina(edificio:Edificio){
    this.edificioService.elimina(edificio).subscribe(data=>{
      this.edificios=this.edificios.filter(e=>e!==edificio)
      alert("Eliminacion exitosa")
    })
    
  }







}
