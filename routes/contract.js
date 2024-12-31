const express = require('express');
const contractrouter = express.Router()
const contractcontroller = require('../controllers/contractprocess');



contractrouter.post('/updatestatus',contractcontroller.UpdateEvent)
contractrouter.post('/assignresponsible',contractcontroller.AssignResponsible)
contractrouter.post('/deleteevent',contractcontroller.DeleteEvent)


contractrouter.get('/getevents',contractcontroller.ObtenerEventos)
contractrouter.get('/getsingleevent',contractcontroller.ObtenerEventoUnico)
contractrouter.get('/getsingleeventcelular',contractcontroller.ObtenerEventoUnicoCelular)



module.exports = contractrouter