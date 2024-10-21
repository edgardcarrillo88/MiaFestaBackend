const mongoose = require('mongoose')

const socialmediaschema = mongoose.Schema({
    descripcion: String,
    socialmedia: String,
    Date: Date,
    deleted: { type: Boolean, default: false }
},
    {
        timestamps: true
    })


const socialmedia = mongoose.model('socialmedia', socialmediaschema, 'socialmedia')
module.exports = socialmedia