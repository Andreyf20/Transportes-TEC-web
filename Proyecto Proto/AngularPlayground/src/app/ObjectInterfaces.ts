export interface Solicitud {

    idSolicitud: number;
    dependenciaSolictante: string;
    encargado: string;
    justificacion: string;
    lugaresRuta: string;
    tipoActividad: string;
    tipoVehiculo: string;
    numCentroFuncional: number;
    fechaHoraSalida: Date;
    fechaHoraRegreso: Date;
    placaVehiculo: string;
    nombreConductor: string;

}
