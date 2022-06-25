import { Propietario } from "./propietario.model";
import { Servicio } from "./servicio.model";
import { Usuario } from "./usuario.model";

export class Boleta {
    idBoleta?:number;
    usuario?:Usuario;
    fechaPago?: string;
    estado?: string;
    servicio?: Servicio;
    propietario?: Propietario;
}
