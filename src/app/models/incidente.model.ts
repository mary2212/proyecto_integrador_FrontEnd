import { Departamento } from "./departamento.model";
import { Edificio } from "./edificio.model";

export class Incidente {

    idIncidente?: number;
    descripcion?: string;
    fechaIncidente?: string;
    departamento?: Departamento;
    edificio?: Edificio;
    estado?: string;
    solucion?: string;
}
