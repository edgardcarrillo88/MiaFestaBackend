const mongoose = require('mongoose')

const formcontractschema = mongoose.Schema({
    firstName: String,
    lastName: String,
    id: String,
    address: String,
    ChildName: String,
    eventDate: Date,
    time: String,
    attendees: Number,
    phone: String,
    paqueteBF: Boolean,
    DetalleBandejasBF: Array,
    MesaBF: String,
    paqueteGF: Boolean,
    DetalleBandejasGF: Array,
    MesaGF: String,
    animacion: {
        type: Boolean,
        default: false
    },
    acompanhamiento: Boolean,
    pinhata: {
        type: Boolean,
        default: false
    },
    canto: {
        type: Boolean,
        default: false
    },
    Responsable: {
        type: String,
        default: '',
    },
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