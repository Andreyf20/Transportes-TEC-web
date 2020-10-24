CREATE OR REPLACE PROCEDURE spCrearSolicitud(

	-- Info para tabla solicitudes
	dependenciaSolicitanteInput varchar(256),
    encargadoInput varchar(128),
    justificacionInput varchar(1024),
    numCentroFuncionalInput bigint,
    tipoActividadInput varchar(100),
    tipoVehiculoInput varchar(128),
	
	-- Info para tabla viajes
	lugaresrutaInput varchar(4096),
    fechahorasalidaInput timestamp,
    fechahoraregresoInput timestamp,
    kilometrajeinicialInput real = 0,
    kilometrajefinalInput real = 0,
    costoxkilometroInput real = 0,
    descripcionInput varchar(2048) = 'No hay descripcion',
    notasconductorInput varchar(4096)  = 'No hay notas',
    tipocombustibleInput varchar(30) = 'NO ESPECIFICADO',
    costocombustibleInput real = 0,
    nombreconductorInput varchar(256) = 'NO ESPECIFICADO',
    cedulaconductorInput bigint = 0

)
LANGUAGE PLPGSQL
AS $$
	DECLARE 
		idSolicitudInput bigint;
	BEGIN
		INSERT INTO solicitudes(
			dependenciaSolicitante,
			encargado,
			estadoSolicitud,
			justificacion,
			numCentroFuncional,
			numSolicitud,
			tipoActividad,
			tipoVehiculo
		)
		VALUES (
			dependenciaSolicitanteInput,
			encargadoInput,
			'PENDIENTE',
			justificacionInput,
			numCentroFuncionalInput,
			-1,
			tipoActividadInput,
			tipoVehiculoInput
		
		) RETURNING idSolicitud into idSolicitudInput;
		
		UPDATE solicitudes
			SET numSolicitud = idSolicitudInput WHERE solicitudes.idSolicitud = idSolicitudInput;

		INSERT INTO viajes(
			idSolicitud,
			lugaresruta,
			fechahorasalida,
			fechahoraregreso,
			kilometrajeinicial,
			kilometrajefinal,
			diferenciakilometraje,
			costoxkilometro,
			descripcion,
			notasconductor,
			tipocombustible,
			costocombustible,
			nombreconductor,
			cedulaconductor
		)
		VALUES (
			idSolicitudInput,
			lugaresrutaInput,
			fechahorasalidaInput,
			fechahoraregresoInput,
			kilometrajeinicialInput,
			kilometrajefinalInput,
			(kilometrajefinalInput - kilometrajeinicialInput), -- as diferenciakilometraje
			costoxkilometroInput,
			descripcionInput,
			notasconductorInput,
			tipocombustibleInput,
			costocombustibleInput,
			nombreconductorInput,
			cedulaconductorInput
		);
		
	END;
$$;

/*
CALL spCrearSolicitud(
'Vicerrectoria de administracion2':: varchar ,
'Pedrito Chaves2':: varchar,
'Gira al Museo de los Niños2'::varchar,
1522,
'Gira2'::varchar,
'Buseta2'::varchar,
'Museo de los Niños por pista pa2'::varchar,
'2020-10-21 10:00'::timestamp,
'2020-10-21 18:00'::timestamp);
SELECT * FROM solicitudes;
SELECT * FROM viajes;
*/

-- Ref Function that returns a query (select) https://stackoverflow.com/a/7945958

CREATE OR REPLACE FUNCTION spConsultarSolicitud(numSolicitudInput bigint)
RETURNS TABLE(
	dependenciaSolicitante varchar(256),
    encargado varchar(128),
	estadosolicitud varchar(50),
    justificacion varchar(1024),
    numCentroFuncional bigint,
    numSolicitud bigint,
    tipoActividad varchar(100),
    tipoVehiculo varchar(128)
)
AS
$$
	BEGIN
		RETURN QUERY
		SELECT
			S.dependenciasolicitante, 
			S.encargado, 
			S.estadosolicitud, 
			S.justificacion, 
			S.numcentrofuncional, 
			S.numsolicitud, 
			S.tipoactividad, 
			S.tipovehiculo
		FROM solicitudes S
		WHERE S.numsolicitud = numSolicitudInput;
	END;
$$
LANGUAGE PLPGSQL;

-- select * from spConsultarSolicitud(1::bigint);

CREATE OR REPLACE FUNCTION spConsultarSolicitudesXFuncionario(nombreFuncionario text)
RETURNS TABLE(
	dependenciaSolicitante varchar(256),
    encargado varchar(128),
	estadosolicitud varchar(50),
    justificacion varchar(1024),
    numCentroFuncional bigint,
    numSolicitud bigint,
    tipoActividad varchar(100),
    tipoVehiculo varchar(128)
)
AS
$$
	BEGIN

		IF nombreFuncionario = '*' THEN
			RETURN QUERY SELECT
				S.dependenciasolicitante, 
				S.encargado, 
				S.estadosolicitud, 
				S.justificacion, 
				S.numcentrofuncional, 
				S.numsolicitud, 
				S.tipoactividad, 
				S.tipovehiculo
			FROM solicitudes S;
		ELSE
			RETURN QUERY SELECT
				S.dependenciasolicitante, 
				S.encargado, 
				S.estadosolicitud, 
				S.justificacion, 
				S.numcentrofuncional, 
				S.numsolicitud, 
				S.tipoactividad, 
				S.tipovehiculo
			FROM solicitudes S
			WHERE lower(S.encargado) = lower(nombreFuncionario);
		END IF;
	END;
$$
LANGUAGE PLPGSQL;

-- select * from spConsultarSolicitudesXFuncionario('pedrito chaves'::text)


CREATE OR REPLACE FUNCTION spConsultarSolicitudConViaje(nombreFuncionario text)
RETURNS TABLE(
	dependenciaSolicitante varchar(256),
    encargado varchar(128),
	estadosolicitud varchar(50),
    justificacion varchar(1024),
    numCentroFuncional bigint,
    numSolicitud bigint,
    tipoActividad varchar(100),
    tipoVehiculo varchar(128),
	--Datos de viaje
	lugaresRuta character varying(4096),
    fechaHoraSalida timestamp,
    fechaHoraRegreso timestamp,
    kilometrajeInicial real,
    kilometrajeFinal real,
    diferenciaKilometraje real,
    costoXkilometro real,
    descripcion character varying(2048),
    notasConductor character varying(4096),
    tipoCombustible character varying(30),
    costoCombustible real,
    nombreConductor character varying(256),
    cedulaConductor bigint
)
AS
$$
	BEGIN

		IF nombreFuncionario = '*' THEN
			RETURN QUERY SELECT
				S.dependenciasolicitante, 
				S.encargado, 
				S.estadosolicitud, 
				S.justificacion, 
				S.numcentrofuncional, 
				S.numsolicitud, 
				S.tipoactividad, 
				S.tipovehiculo,
				
				V.lugaresruta,
				V.fechahorasalida,
				V.fechahoraregreso,
				V.kilometrajeinicial,
				V.kilometrajefinal,
				V.diferenciakilometraje,
				V.costoxkilometro,
				V.descripcion,
				V.notasconductor,
				V.tipocombustible,
				V.costocombustible,
				V.nombreconductor,
				V.cedulaconductor
			FROM solicitudes S INNER JOIN viajes V ON (S.idSolicitud = V.idSolicitud);
		ELSE
			RETURN QUERY SELECT
				S.dependenciasolicitante, 
				S.encargado, 
				S.estadosolicitud, 
				S.justificacion, 
				S.numcentrofuncional, 
				S.numsolicitud, 
				S.tipoactividad, 
				S.tipovehiculo,
				
				V.lugaresruta,
				V.fechahorasalida,
				V.fechahoraregreso,
				V.kilometrajeinicial,
				V.kilometrajefinal,
				V.diferenciakilometraje,
				V.costoxkilometro,
				V.descripcion,
				V.notasconductor,
				V.tipocombustible,
				V.costocombustible,
				V.nombreconductor,
				V.cedulaconductor
			FROM solicitudes S INNER JOIN viajes V ON (S.idSolicitud = V.idSolicitud)
			WHERE lower(S.encargado) LIKE lower(nombreFuncionario);
		END IF;
	END;
$$
LANGUAGE PLPGSQL;

-- select * from spConsultarSolicitudConViaje('pedrito chaves'::text)

CREATE OR REPLACE FUNCTION spConsultarViaje(numSolicitudInput bigint)
RETURNS TABLE(
    lugaresRuta character varying(4096),
    fechaHoraSalida timestamp,
    fechaHoraRegreso timestamp,
    kilometrajeInicial real,
    kilometrajeFinal real,
    diferenciaKilometraje real,
    costoXkilometro real,
    descripcion character varying(2048),
    notasConductor character varying(4096),
    tipoCombustible character varying(30),
    costoCombustible real,
    nombreConductor character varying(256),
    cedulaConductor bigint
)
AS
$$
	DECLARE
		idSolicitudFound bigint;
	BEGIN
		
		idSolicitudFound := (SELECT S.idSolicitud FROM solicitudes S WHERE S.idSolicitud = numSolicitudInput);
	
		RETURN QUERY
		SELECT
			V.lugaresruta,
			V.fechahorasalida,
			V.fechahoraregreso,
			V.kilometrajeinicial,
			V.kilometrajefinal,
			V.diferenciakilometraje,
			V.costoxkilometro,
			V.descripcion,
			V.notasconductor,
			V.tipocombustible,
			V.costocombustible,
			V.nombreconductor,
			V.cedulaconductor
		FROM viajes V
		WHERE V.idSolicitud = idSolicitudFound;
	END;
$$
LANGUAGE PLPGSQL;

/*
Test:
	- select * from spConsultarViaje(1::bigint) t;
 	- select row_to_json(t) from spConsultarViaje(1::bigint) t;
*/ 

-- Actualizar datos faltantes del viaje 

CREATE OR REPLACE PROCEDURE spActualizarDatosViaje(
	numSolicitudInput bigint,
	kilometrajeinicialInput real = 0,
    kilometrajefinalInput real = 0,
    costoxkilometroInput real = 0,
    descripcionInput varchar(2048) = 'No hay descripcion',
    notasconductorInput varchar(4096)  = 'No hay notas',
    tipocombustibleInput varchar(30) = 'NO ESPECIFICADO',
    costocombustibleInput real = 0,
    nombreconductorInput varchar(256) = 'NO ESPECIFICADO',
    cedulaconductorInput bigint = 0
)
LANGUAGE PLPGSQL
AS $$
	DECLARE 
		idSolicitudFound bigint;
	BEGIN

		idSolicitudFound := (SELECT S.idSolicitud FROM solicitudes S WHERE S.idSolicitud = numSolicitudInput);

		UPDATE viajes

			SET
				kilometrajeinicial = kilometrajeinicialInput,
				kilometrajefinal = kilometrajefinalInput,
				diferenciakilometraje = (kilometrajefinalInput - kilometrajeinicialInput),
				costoxkilometro = costoxkilometroInput,
				descripcion = descripcionInput,
				notasconductor = notasconductorInput,
				tipocombustible = tipocombustibleInput,
				costocombustible = costocombustibleInput,
				nombreconductor = nombreconductorInput,
				cedulaconductor = cedulaconductorInput
			
			WHERE idSolicitudFound = viajes.idSolicitud;
	END;
$$;


numSolicitudInput bigint,
	kilometrajeinicialInput real = 0,
    kilometrajefinalInput real = 0,
    costoxkilometroInput real = 0,
    descripcionInput varchar(2048) = 'No hay descripcion',
    notasconductorInput varchar(4096)  = 'No hay notas',
    tipocombustibleInput varchar(30) = 'NO ESPECIFICADO',
    costocombustibleInput real = 0,
    nombreconductorInput varchar(256) = 'NO ESPECIFICADO',
    cedulaconductorInput bigint = 0
/*
Test suite:
CALL spActualizarDatosViaje(
	1,
	50,
	70,
	50,
	'Con conductor y diesel'::varchar,
	'No hay notas'::varchar,
	'Diesel'::varchar,
	500,
	'Keanu Reeves'::varchar,
	123456789
);
*/ 

CREATE OR REPLACE PROCEDURE spActualizarEstadoSolicitud(
	numSolicitudInput bigint,
	nuevoEstado varchar(50)
)
LANGUAGE PLPGSQL
AS $$
	DECLARE 
		idSolicitudFound bigint;
	BEGIN

		idSolicitudFound := (SELECT S.idSolicitud FROM solicitudes S WHERE S.idSolicitud = numSolicitudInput);

		UPDATE solicitudes

			SET estadoSolicitud = nuevoEstado
		
		WHERE idSolicitudFound = solicitudes.idSolicitud;
	END;
$$;

-- CALL spActualizarEstadoSolicitud(1,'APROBADO'::VARCHAR);
select * from solicitudes