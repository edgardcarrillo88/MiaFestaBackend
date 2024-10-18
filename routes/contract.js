const express = require('express');
const contractrouter = express.Router()
const contractcontroller = require('../controllers/contractprocess');



contractrouter.post('/updatestatus',contractcontroller.UpdateEvent)


contractrouter.get('/getevents',contractcontroller.ObtenerEventos)
contractrouter.get('/getsingleevent',contractcontroller.ObtenerEventoUnico)



module.exports = contractrouter