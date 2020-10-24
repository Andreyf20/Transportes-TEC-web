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
        dependienciasolicitante: string,
        encargado: string,
        justificacion: string,
        numcentrofuncional: number,
        tipoactividad: string,
        tipovehiculo: string,
        lugaresruta: string,
        fechahorasalida: Date,
        fechahoraregreso: Date,

        numsolicitud = -1,
        estadosolicitud = 'PENDIENTE',
        kilometrajeinicial = 0,
        kilometrajefinal = 0,
        diferenciakilometraje = (kilometrajefinal - kilometrajeinicial),
        costoxkilometro = 0,
        descripcion = 'No hay descripcion',
        notasconductor   = 'No hay notas',
        tipocombustible = 'NO ESPECIFICADO',
        costocombustible = 0,
        nombreconductor = 'NO ESPECIFICADO',
        cedulaconductor  = 0
        ){

        this.dependenciasolicitante = dependienciasolicitante;
        this.encargado = encargado;
        this.justificacionviaje = justificacion;
        this.numerocentrofuncional = numcentrofuncional;
        this.tipoactividad = tipoactividad;

        this.tipovehiculo = tipovehiculo;
        this.lugaresruta = lugaresruta;
        this.horasalida = fechahorasalida;
        this.horaregreso = fechahoraregreso;

        this.numsolicitud = numsolicitud;
        this.estadosolicitud = estadosolicitud;
        this.kilometrajeinicial = kilometrajeinicial;
        this.kilometrajefinal = kilometrajefinal;
        this.diferenciakilometraje = diferenciakilometraje;
        this.costoxkilometro = costoxkilometro;
        this.descripcion  = descripcion;
        this.notasconductor   = notasconductor;
        this.tipocombustible = tipocombustible;
        this.costocombustible = costocombustible;
        this.nombreconductor =  nombreconductor;
        this.cedulaconductor  = cedulaconductor;
    }
}
