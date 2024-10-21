const express = require('express');
const socialmediarouter = express.Router()
const socialmediacontroller = require('../controllers/socialmediaprocess');



socialmediarouter.post('/create',socialmediacontroller.CreatePost)
socialmediarouter.post('/delete',socialmediacontroller.DeletePost)



socialmediarouter.get('/getpost',socialmediacontroller.GetPost)
// socialmediarouter.get('/getsingleevent',socialmediacontroller.ObtenerEventoUnico)



module.exports = socialmediarouter