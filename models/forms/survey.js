const mongoose = require('mongoose')

const formsurveyschema = mongoose.Schema({
    Bandejas: {
        type: Number,
        default: 0,
    },
    Mesas: {
        type: Number,
        default: 0,
    },
    Animacion: {
        type: Number,
        default: 0,
    },
    TratoAsistentes: {
        type: Number,
        default: 0,
    },
    TratoContrato: {
        type: Number,
        default: 0,
    },
    Recomendaciones: {
        type: Number,
        default: 0,
    },
    Comentarios: {
        type: String,
        default: '',
    },
    deleted: { type: Boolean, default: false }
},
    {
        timestamps: true
    })


const formsurvey = mongoose.model('formsurvey', formsurveyschema, 'formsurvey')
module.exports = formsurvey