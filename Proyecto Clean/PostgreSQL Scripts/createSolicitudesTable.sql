-- Tabla de Solicitudes

-- Table: public.solicitudes

-- DROP TABLE public.solicitudes;

CREATE TABLE public.solicitudes
(
    dependenciaSolicitante character varying(256) COLLATE pg_catalog.default NOT NULL,
    encargado character varying(128) COLLATE pg_catalog.default NOT NULL,
    estadoSolicitud character varying(50) COLLATE pg_catalog.default NOT NULL,
    idSolicitud SERIAL PRIMARY KEY,
    justificacion character varying(1024) COLLATE pg_catalog.default NOT NULL,
    numCentroFuncional bigint NOT NULL,
    numSolicitud bigint NOT NULL,
    tipoActividad character varying(100) COLLATE pg_catalog.default NOT NULL,
    tipoVehiculo character varying(128) COLLATE pg_catalog.default NOT NULL
);

ALTER TABLE public.solicitudes
    OWNER to xglcmouehclolk;

-- Tabla Viajes

-- Table: public.viajes

-- DROP TABLE public.viajes;

CREATE TABLE public.viajes
(
    idViaje SERIAL PRIMARY KEY,
    idSolicitud bigint NOT NULL,
    lugaresRuta character varying(4096) COLLATE pg_catalog.default NOT NULL,
    fechaHoraSalida timestamp NOT NULL,
    fechaHoraRegreso timestamp NOT NULL,
    kilometrajeInicial real NOT NULL,
    kilometrajeFinal real NOT NULL,
    diferenciaKilometraje real NOT NULL,
    costoXkilometro real NOT NULL,
    descripcion character varying(2048) COLLATE pg_catalog.default NOT NULL,
    notasConductor character varying(4096) COLLATE pg_catalog.default NOT NULL,
    tipoCombustible character varying(30) COLLATE pg_catalog.default NOT NULL,
    costoCombustible real NOT NULL,
    nombreConductor character varying(256) COLLATE pg_catalog.default,
    cedulaConductor bigint,
    FOREIGN KEY (idsolicitud)
        REFERENCES public.solicitudes (idsolicitud) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE public.viajes
    OWNER to xglcmouehclolk;