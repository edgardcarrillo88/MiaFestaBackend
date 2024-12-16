const express = require('express');
const formrouter = express.Router()
const formcontroller = require('../controllers/formsprocess');



formrouter.post('/contracts',formcontroller.RegistrarFormContratos)
formrouter.post('/updatecontracts',formcontroller.ActualizarFormContratos)
formrouter.post('/checklist',formcontroller.RegistrarFormCheckList)
formrouter.post('/survey',formcontroller.RegistrarFormSurvey)
formrouter.post('/feedback',formcontroller.RegistrarFormFeedback)

formrouter.get('/getevents',formcontroller.ObtenerEventos)
formrouter.get('/getsingleevent',formcontroller.ObtenerEventoUnico)



module.exports = formrouter