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
    animacion: Boolean,
    acompanhamiento: Boolean,
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