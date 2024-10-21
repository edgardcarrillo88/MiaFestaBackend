const ContractModel = require('../models/forms/contract');



const ObtenerEventos = async (req, res) => {
    console.log("Obteniendo eventos");

    try {
        const events = await ContractModel.find(
            { deleted: false }
        );
        console.log("Eventos: ", events.length);
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

const DeleteEvent = async (req,res)  =>{
    console.log("Eliminando Evento");
    const { id } = req.body
    try {
        const response = await ContractModel.findByIdAndUpdate(id, { deleted: true });
        res.status(200).json({ message: "Evento eliminado" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar el evento" })        
    }
}

const AssignResponsible = async (req, res) => {
    console.log(req.body);
    try {
        const response = await ContractModel.findByIdAndUpdate(req.body.selectedEvent.id, { Responsable: req.body.selectedResponsible });
        res.status(200).json({ message: "Responsable asignado" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al asignar el responsable" })        
    }
}


module.exports = {
    ObtenerEventos,
    ObtenerEventoUnico,
    UpdateEvent,
    DeleteEvent,
    AssignResponsible
}

