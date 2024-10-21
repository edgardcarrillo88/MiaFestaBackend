const mongoose = require('mongoose')

const formfeedbackschema = mongoose.Schema({
    Satisfaccion: {
        type: String,
        default: "Si",
    },
    Recomendacion: {
        type: String,
        default: "Si",
    },
    Problemas: {
        type: String,
        default: "Si",
    },
    NuevasCaracteristicas: {
        type: String,
        default: "Si",
    },
    ContactoUltimoMes: {
        type: String,
        default: "Si",
    },


    SatisfaccionComments: {
        type: String,
        default: '',
    },
    RecomendacionComments: {
        type: String,
        default: '',
    },
    ProblemasComments: {
        type: String,
        default: '',
    },
    NuevasCaracteristicasComments: {
        type: String,
        default: '',
    },
    ContactoUltimoMesComments: {
        type: String,
        default: '',
    },


    CalificacionProducto: {
        type: Number,
        default: 0,
    },

    CalificacionFacilidadUso: {
        type: Number,
        default: 0,
    },

    CalificacionAtencion: {
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


const formfeedback = mongoose.model('formfeedback', formfeedbackschema, 'formfeedback')
module.exports = formfeedback