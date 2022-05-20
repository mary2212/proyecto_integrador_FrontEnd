import { Departamento } from "./departamento.model";
import { Usuario } from "./usuario.model";

export class Propietario {

    idPropietario?: number;
    nombrePropietario?: string;
    apellidoPropietario?: string;
    telefonoPropietario?: string;
    dniPropietario?: string;
    fechaNacPropietario?: string;
    fechaRegistroPropietario?: string;
    usuario?: Usuario;
    departamento?: Departamento

}
