import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Mascota } from 'src/app/models/mascota.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent implements OnInit {

  mascotas: Mascota [] = [];
  filtro: string = "";

  numeroDepartamento: string [] = [];

  mascota: Mascota = {
    idMascota:0,
    descripcion:"",
    departamento:{
      idDepartamento:0,  
      numeroDepartamento:0,    
    }
  };

  listaDepartamentos: Departamento[] = [];

  constructor(private mascotaService:MascotaService, private departamentoService:DepartamentoService) {
    this.departamentoService.listaDepartamento().subscribe(
      mascotas => this.listaDepartamentos = mascotas
    );
   }

  ngOnInit(): void {
  }

  consulta(){
    console.log(" ==> consulta() ==> filtro " + this.filtro);

    this.mascotaService.consulta(this.filtro).subscribe(
      response => this.mascotas = response
    );
    
  }

  registra(){
    console.log(" ==> registra ==> filtro ==>" + this.mascota.idMascota);
    console.log(" ==> registra ==> descripcion ==>" + this.mascota.descripcion);
    console.log(" ==> registra ==> departamento ==>" + this.mascota.departamento);   

    this.mascotaService.registra(this.mascota).subscribe(
      response =>{
        alert(response.mensaje);

        this.mascotaService.consulta(this.filtro).subscribe(
          response => this.mascotas = response
        );
          
        this.mascota = {
          idMascota:0,
          descripcion:"",
          departamento:{
            idDepartamento:0,
          },
          };
      }
    );

  }

  busca(aux:Mascota){
    console.log("==> busca ==> mascota ==> " + aux.idMascota);

    this.mascota = aux;
    
  }

  actualiza(){
    console.log(" ==> actualiza ==> filtro ==>" + this.mascota.idMascota);
    console.log(" ==> actualiza ==> descripcion ==>" + this.mascota.descripcion);
    console.log(" ==> actualiza ==> departamento ==>" + this.mascota.departamento);   

    this.mascotaService.actualiza(this.mascota).subscribe(
      response =>{
        alert(response.mensaje);

        this.mascotaService.consulta(this.filtro).subscribe(
          response => this.mascotas = response
        );
          
        this.mascota = {
          idMascota:0,
          descripcion:"",
          departamento:{
            idDepartamento:0,
          },
          };
      }
    );

  }

  elimina(mascota:Mascota){
    this.mascotaService.elimina(mascota).subscribe(data=>{
      this.mascotas=this.mascotas.filter(e=>e!==mascota)
      alert("Eliminacion exitosa")
    })
    
  } 

}
