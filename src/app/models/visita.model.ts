import { Visitante } from "./visitante.model";
import { Departamento } from "./departamento.model";

export class Visita {

    idVisita?: number;
    visitante?: Visitante;
    fechaEntrada?: string;
    fechaSalida?: string;
    estado?: string;
    departamento?: Departamento;
}
