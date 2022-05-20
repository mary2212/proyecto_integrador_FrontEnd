import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento.model';
import { Propietario } from 'src/app/models/propietario.model';
import { Usuario } from 'src/app/models/usuario.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-propietario',
  templateUrl: './add-propietario.component.html',
  styleUrls: ['./add-propietario.component.css']
})
export class AddPropietarioComponent implements OnInit {

  propiertarios: Propietario [] = [];
  filtro: string = "";

  login: string [] = [];
  numeroDepartamento: string [] = [];

  propietario: Propietario = {
    idPropietario:0,
    nombrePropietario:"",
    apellidoPropietario:"",
    telefonoPropietario:"",
    dniPropietario:"",
    fechaNacPropietario:"",
    fechaRegistroPropietario:"",
    usuario:{
      idUsuario:0,
      login:"",
    },
    departamento:{
      idDepartamento:0,
      numeroDepartamento:0,
    }
  };

  listaUsuarios: Usuario[] = [];
  listaDepartamentos: Departamento[] = [];

  constructor(private propietarioService: PropietarioService,private usuarioService: UsuarioService,private departamentoService: DepartamentoService) {
    this.usuarioService.listaUsuario().subscribe(
      usuarios => this.listaUsuarios = usuarios
    );

    this.departamentoService.listaDepartamento().subscribe(
      departamentos => this.listaDepartamentos = departamentos
    );
   }

  ngOnInit(): void {
  }

  consulta(){
    console.log(" ==> consulta() ==> filtro " + this.filtro);

    this.propietarioService.consulta(this.filtro).subscribe(
      response => this.propiertarios = response
    );
    
  }

  registra(){
    console.log(" ==> registra ==> filtro ==>" + this.propietario.idPropietario);
    console.log(" ==> registra ==> nombrePropietario ==>" + this.propietario.nombrePropietario);
    console.log(" ==> registra ==> apellidoPropietario ==>" + this.propietario.apellidoPropietario);
    console.log(" ==> registra ==> telefonoPropietario ==>" + this.propietario.telefonoPropietario);
    console.log(" ==> registra ==> dniPropietario ==>" + this.propietario.dniPropietario);
    console.log(" ==> registra ==> fechaNacPropietario ==>" + this.propietario.fechaNacPropietario);
    console.log(" ==> registra ==> fechaRegistroPropietario ==>" + this.propietario.fechaRegistroPropietario);
    console.log(" ==> registra ==> usuario ==>" + this.propietario.usuario);
    console.log(" ==> registra ==> departamento ==>" + this.propietario.departamento);

    this.propietarioService.registra(this.propietario).subscribe(
      response =>{
        alert(response.mensaje);

        this.propietarioService.consulta(this.filtro).subscribe(
          response => this.propiertarios = response
        );
          
        this.propietario = {
          idPropietario:0,
          nombrePropietario:"",
          apellidoPropietario:"",
          telefonoPropietario:"",
          dniPropietario:"",
          fechaNacPropietario:"",
          fechaRegistroPropietario:"",
          usuario:{
            idUsuario:0,
            login:"",
          },
          departamento:{
            idDepartamento:0,
            numeroDepartamento:0,
          }
          };
      }
    );

  }

  busca(aux:Propietario){
    console.log("==> busca ==> departamento ==> " + aux.idPropietario);

    this.propietario = aux;
    
  }

  actualiza(){
    console.log(" ==> actualiza ==> filtro ==>" + this.propietario.idPropietario);
    console.log(" ==> actualiza ==> nombrePropietario ==>" + this.propietario.nombrePropietario);
    console.log(" ==> actualiza ==> apellidoPropietario ==>" + this.propietario.apellidoPropietario);
    console.log(" ==> actualiza ==> telefonoPropietario ==>" + this.propietario.telefonoPropietario);
    console.log(" ==> actualiza ==> dniPropietario ==>" + this.propietario.dniPropietario);
    console.log(" ==> actualiza ==> fechaNacPropietario ==>" + this.propietario.fechaNacPropietario);
    console.log(" ==> actualiza ==> fechaRegistroPropietario ==>" + this.propietario.fechaRegistroPropietario);
    console.log(" ==> actualiza ==> usuario ==>" + this.propietario.usuario);
    console.log(" ==> actualiza ==> departamento ==>" + this.propietario.departamento);

    this.propietarioService.actualiza(this.propietario).subscribe(
      response =>{
        alert(response.mensaje);

        this.propietarioService.consulta(this.filtro).subscribe(
          response => this.propiertarios = response
        );
          
        this.propietario = {
          idPropietario:0,
          nombrePropietario:"",
          apellidoPropietario:"",
          telefonoPropietario:"",
          dniPropietario:"",
          fechaNacPropietario:"",
          fechaRegistroPropietario:"",
          usuario:{
            idUsuario:0,
            login:"",
          },
          departamento:{
            idDepartamento:0,
            numeroDepartamento:0,
          }
          };
      }
    );

  }

  elimina(propietario:Propietario){
    this.propietarioService.elimina(propietario).subscribe(data=>{
      this.propiertarios=this.propiertarios.filter(e=>e!==propietario)
      alert("Eliminacion exitosa")
    })
    
  }  


}
