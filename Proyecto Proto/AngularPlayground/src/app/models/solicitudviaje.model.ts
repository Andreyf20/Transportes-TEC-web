export class SolicitudViaje{

    dependenciasolicitante: string;
    encargado: string;
    estadosolicitud: string;
    justificacion: string;
    numcentrofuncional: number;
    numsolicitud: number;
    tipoactividad: string;
    tipovehiculo: string;
    lugaresruta: string;
    fechahorasalida: Date;
    fechahoraregreso: Date;
    kilometrajeinicial: number;
    kilometrajefinal: number;
    diferenciakilometraje: number;
    costoxkilometro: number;
    descripcion: string;
    notasconductor: string;
    tipocombustible: string;
    costocombustible: number;
    nombreconductor: string;
    cedulaconductor: string;

    constructor(){
        this.estadosolicitud = 'PENDIENTE';
    }

}
