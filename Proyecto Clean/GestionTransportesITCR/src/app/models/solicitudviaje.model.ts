export class SolicitudViaje{

    dependenciasolicitante: string;
    encargado: string;
    estadosolicitud: string;
    justificacionviaje: string;
    numerocentrofuncional: number;
    numsolicitud: number;
    tipoactividad: string;
    tipovehiculo: string;
    lugaresruta: string;
    horasalida: Date;
    horaregreso: Date;

    kilometrajeinicial: number;
    kilometrajefinal: number;
    diferenciakilometraje: number;
    costoxkilometro: number;
    descripcion: string;
    notasconductor: string;
    tipocombustible: string;
    costocombustible: number;
    nombreconductor: string;
    cedulaconductor: number;

    constructor(
        dependienciasolicitante,
        encargado,
        justificacion,
        numcentrofuncional,
        tipoactividad,
        tipovehiculo,
        lugaresruta,
        fechahorasalida,
        fechahoraregreso){

        this.dependenciasolicitante = dependienciasolicitante;
        this.encargado = encargado;
        this.justificacionviaje = justificacion;
        this.numerocentrofuncional = numcentrofuncional;
        this.tipoactividad = tipoactividad;

        this.tipovehiculo = tipovehiculo;
        this.lugaresruta = lugaresruta;
        this.horasalida = fechahorasalida;
        this.horaregreso = fechahoraregreso;

        this.numsolicitud = -1;
        this.estadosolicitud = 'PENDIENTE';
        this.kilometrajeinicial = 0;
        this.kilometrajefinal = 0;
        this.costoxkilometro = 0;
        this.descripcion  = 'No hay descripcion';
        this.notasconductor   = 'No hay notas';
        this.tipocombustible = 'NO ESPECIFICADO';
        this.costocombustible = 0;
        this.nombreconductor = 'NO ESPECIFICADO';
        this.cedulaconductor  = 0;
    }

}
