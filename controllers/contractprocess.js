const ContractModel = require('../models/forms/contract');



const ObtenerEventos = async (req, res) => {
    console.log("Obteniendo eventos");

    try {
        const events = await ContractModel.find(
            { deleted: false }
        ).sort({ createdAt: -1 });;
        console.log("Eventos: ", events.length);
        res.status(200).json(events);
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

const DeleteEvent = async (req, res) => {
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
        // Obtener el documento existente
        const event = await ContractModel.findById(req.body.selectedEvent.id);

        // Verificar si el campo Responsable es un array y agregar el responsable si no existe
        const updatedResponsable = event.Responsable || []; // Si es undefined, inicializarlo como array vacío

        // Si el responsable no está ya en la lista y el tamaño es menor a 2, agregarlo
        if (!updatedResponsable.includes(req.body.selectedResponsible) && updatedResponsable.length < 2) {
            updatedResponsable.push(req.body.selectedResponsible);
        }

        // Actualizar el documento en MongoDB
        const response = await ContractModel.findByIdAndUpdate(
            req.body.selectedEvent.id,
            {
                Responsable: updatedResponsable // Se asigna el array actualizado
            },
            { new: true } // Para devolver el documento actualizado
        );

        // Enviar respuesta al cliente
        res.status(200).json({ message: "Responsable asignado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al asignar el responsable" });
    }
};

const ObtenerEventoUnicoCelular = async (req, res) => {
    console.log("Obteniendo evento unico celular");
    console.log(req.query);
    const { celular } = req.query
    console.log(celular);
    const celularSinPrefijo = celular.startsWith("51") ? celular.slice(2) : celular;
    try {
        const events = await ContractModel.findOne({
            phone: { $regex: celularSinPrefijo, $options: 'i' }
        })
        .sort({ createdAt: -1 });
        res.status(200).json(events)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los eventos" })
    }
}



module.exports = {
    ObtenerEventos,
    ObtenerEventoUnico,
    ObtenerEventoUnicoCelular,
    UpdateEvent,
    DeleteEvent,
    AssignResponsible
}

