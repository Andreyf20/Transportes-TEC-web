const express = require('express')
const cors = require('cors')
const pool = require("./db")
const app = express()

// middleware
app.use(express.json());

// Dummy table for testing
app.get("/api/getUsers",async(req,res) =>{
    pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }
        client.query('SELECT * from usersxd', (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }

          res.write(JSON.stringify(result.rows));
          res.end();

        })
      })
})

app.get("/api/consultarSolicitudesDeFuncionario/:nombreFuncionario/",async(req,res) =>{
  pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      var nombreFuncionario = req.params['nombreFuncionario'];
      client.query("SELECT * from spConsultarSolicitudConViaje('"+nombreFuncionario+"')" , (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
        res.write(JSON.stringify(result.rows));
        res.end();

      })
    })
})

app.get("/api/consultarSolicitud/:numSolicitud/",async(req,res) =>{
    pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }
        var numSolicitud = req.params['numSolicitud'];
        client.query('SELECT * from spConsultarSolicitud('+numSolicitud+')', (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          console.log(result.rows)
          res.write(JSON.stringify(result.rows));
          res.end();

        })
      })
})

app.get("/api/consultarViaje/:numSolicitud/",async(req,res) =>{
    pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }
        var numSolicitud = req.params['numSolicitud'];
        client.query('SELECT * from spConsultarViaje('+numSolicitud+')', (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          
          res.write(JSON.stringify(result.rows));
          res.end();

        })
      })
})

app.post("/api/enviarSolicitud",async(req,res) =>{
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }

    //console.log(req.body);

    const nuevaSolicitud = {
       dependenciasolicitante : req.body.dependenciasolicitante,
       encargado : req.body.encargado,
       justificacionviaje : req.body.justificacionviaje,
       lugaresruta : req.body.lugaresruta,
       tipoactividad : req.body.tipoactividad,
       tipovehiculo : req.body.tipovehiculo,
       horasalida : req.body.horasalida,
       horaregreso : req.body.horaregreso,
       numerocentrofuncional : req.body.numerocentrofuncional
    }

    //console.log(nuevaSolicitud);

    const query = `CALL spCrearSolicitud(
      '${nuevaSolicitud.dependenciasolicitante}' :: varchar,
      '${nuevaSolicitud.encargado}' :: varchar,
      '${nuevaSolicitud.justificacionviaje}' :: varchar,
      ${nuevaSolicitud.numerocentrofuncional},
      '${nuevaSolicitud.tipoactividad}' :: varchar,
      '${nuevaSolicitud.tipovehiculo}' :: varchar,
      '${nuevaSolicitud.lugaresruta}' :: varchar,
      '${nuevaSolicitud.horasalida}' :: timestamp,
      '${nuevaSolicitud.horaregreso}' :: timestamp);`

    //console.log(query)

    client.query(query, (err, result) => {
      release()
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      
      res.status(200).send({'done': 'done'})
    })

    console.log(nuevaSolicitud);

  })

})

var port = 5000;

app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
