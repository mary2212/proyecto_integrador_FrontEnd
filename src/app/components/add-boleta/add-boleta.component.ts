import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/models/boleta.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Servicio } from 'src/app/models/servicio.model';
import { Propietario } from 'src/app/models/propietario.model';
import { BoletaService } from 'src/app/services/boleta.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-boleta',
  templateUrl: './add-boleta.component.html',
  styleUrls: ['./add-boleta.component.css']
})
export class AddBoletaComponent implements OnInit {

  boletas: Boleta[] =[];
  filtro: string= "";
 

  idUsuario: number [] = [];
  idServicio: number [] = [];
  idPropietario: number [] = [];
  estado: string  = "";
  idServicio2: number = -1;
  idPropietario2: number = -1;

  boleta: Boleta= {
    idBoleta:0,
    usuario:{
      idUsuario:0,
    },
    fechaPago:"",
    estado:"",
    servicio:{
      idServicio:0
    },
    propietario:{
      idPropietario:0
    }
  };

  listaUsuarios: Usuario[] = [];
  listaServicios: Servicio[] =[];
  listaPropietarios: Propietario[] =[];


  
  constructor(private boletaService:BoletaService, private usuarioService:UsuarioService, private servicioService:ServicioService,private propietarioService:PropietarioService) {
    this.usuarioService.listaUsuario().subscribe(
      usuarios => this.listaUsuarios = usuarios
    );

    this.servicioService.listaServicio().subscribe(
      servicios => this.listaServicios = servicios
    );

    this.propietarioService.listaPropietario().subscribe(
      propietarios => this.listaPropietarios = propietarios
    );
   }

  ngOnInit(): void {
  }

  consulta(){
    console.log(" ==> consulta() ==> filtro " + this.filtro);

    this.boletaService.consulta(this.filtro).subscribe(
      response => this.boletas = response
    );  
  }


  registra(){
    this.boletaService.registra(this.boleta).subscribe(
      response =>{
        alert(response.mensaje);
        this.boletaService.consulta(this.filtro).subscribe(
          response=> this.boletas=response);
          this.boleta={
            idBoleta: 0,
            usuario:{
              idUsuario:0
            },
            fechaPago: "",
            estado: "",
            servicio:{
              idServicio:0
            },
            propietario:{
              idPropietario:0
            }
          };
        
      }
    );
  }

  busca(aux:Boleta){
    console.log("==> busca ==> boleta ==> " + aux.idBoleta);

    this.boleta = aux;
    
  }

  actualiza(){
    console.log(" ==> actualiza ==> filtro ==>" + this.boleta.idBoleta);
    console.log(" ==> actualiza ==> numeroDepartamento ==>" + this.boleta.usuario?.idUsuario);
    console.log(" ==> actualiza ==> piso ==>" + this.boleta.fechaPago);
    console.log(" ==> actualiza ==> metrosCuadrados ==>" + this.boleta.estado);
    console.log(" ==> actualiza ==> edificio ==>" + this.boleta.servicio?.idServicio);
    console.log(" ==> actualiza ==> estado ==>" + this.boleta.propietario?.idPropietario);    

    this.boletaService.actualiza(this.boleta).subscribe(
      response =>{
        alert(response.mensaje);
        this.boletaService.consulta(this.filtro).subscribe(
          response=> this.boletas=response);
          this.boleta={
            idBoleta:0,
            usuario:{
              idUsuario:0
            },
            fechaPago:"",
            estado:"",
            servicio:{
              idServicio:0
            },
            propietario:{
              idPropietario:0
            }
          };
        
      }
    );
  }

  listaBoletaParam(){
    this.boletaService.listaBoletaParametros(this.estado, this.idServicio2,this.idPropietario2).subscribe(
      (x) =>{
        this.boletas = x.lista;
        alert(x.mensaje);
      }
    );
  }
}