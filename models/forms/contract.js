const mongoose = require('mongoose')

const formcontractschema = mongoose.Schema({
    firstName: String,
    lastName: String,
    id: String,
    address: String,
    ChildName: String,
    eventDate: Date,

    time: String,
    timestart: String,
    timefinish: String,



    attendees: Number,
    tematica: String,
    phone: String,
    paqueteBF: Boolean,
    DetalleBandejasBF: Array,
    MesaBF: String,
    paqueteGF: Boolean,
    DetalleBandejasGF: Array,
    MesaGF: String,


    animacionBF: {
        type: Boolean,
        default: false
    },
    acompanhamiento: Boolean,
    pinhataBF: {
        type: Boolean,
        default: false
    },
    cantoBF: {
        type: Boolean,
        default: false
    },
    personajeBF: {
        type: Boolean,
        default: false
    },
    personajedescripcionBF: String,




    animacionGF: {
        type: Boolean,
        default: false
    },
    acompanhamiento: Boolean,
    pinhataGF: {
        type: Boolean,
        default: false
    },
    cantoGF: {
        type: Boolean,
        default: false
    },
    personajeGF: {
        type: Boolean,
        default: false
    },
    personajedescripcionGF: String,

    

    Responsable: {
        type: String,
        default: '',
    },

    Responsable: Array,

    Monto: {
        type: Number,
        default: 0,
    },
    Adelanto: {
        type: Number,
        default: 0,
    },
    allergies: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        default: 'Pendiente',
    },
    deleted: { type: Boolean, default: false }
},
    {
        timestamps: true
    })


const formcontract = mongoose.model('formcontract', formcontractschema, 'formcontract')
module.exports = formcontract