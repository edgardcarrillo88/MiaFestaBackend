const ContractModel = require('../models/forms/contract');



const ObtenerEventos = async (req, res) => {
    console.log("Obteniendo eventos");

    try {
        const events = await ContractModel.find();
        res.status(200).json(events)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los eventos" })
    }
}

const ObtenerEventoUnico = async (req, res) => {
    console.log("Obteniendo evento unico");
    const { id } = req.query
    console.log(id);
    try {
        const events = await ContractModel.find({ _id: id });
        res.status(200).json(events)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los eventos" })
    }
}

const UpdateEvent = async (req, res) => {
    const { status, id } = req.body
    try {
        const response = await ContractModel.findByIdAndUpdate(id, { status: status });
        res.status(200).json({ message: "Evento actualizado" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar el evento" })        
    }
}


module.exports = {
    ObtenerEventos,
    ObtenerEventoUnico,
    UpdateEvent
}

