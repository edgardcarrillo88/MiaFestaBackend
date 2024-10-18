const FormContractModel = require('../models/forms/contract');


const RegistrarFormContratos = async (req, res) => {
    console.log("EJecutando la carga de contratos");
    console.log(req.body);
    try {
        const data = new FormContractModel(req.body);
        await data.save();
        console.log("Carga realizada con exito");
        res.status(200).json({ message: "Carga realizada con exito" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al cargar contratos" })
    }
}

const RegistrarFormCheckList = async (req, res) => {
    console.log("Ejecutando la carga de form de checklist");
    try {
        console.log("Carga realizada con exito");
        res.status(200).json({ message: "Carga realizada con exito" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al cargar checklist" })

    }
}

const RegistrarFormSurvey = async (req, res) => {
    console.log("Ejecutando la carga de form de encuestas");
    try {
        console.log("Carga realizada con exito");
        res.status(200).json({ message: "Carga realizada con exito" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al cargar la encuesta" })

    }
}

const RegistrarFormFeedback = async (req, res) => {
    console.log("Ejecutando la carga de form de feedback");
    try {
        console.log("Carga realizada con exito");
        res.status(200).json({ message: "Carga realizada con exito" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al cargar el feedback" })

    }
}


const ObtenerEventos = async (req, res) => {
    console.log("Obteniendo eventos");

    try {
        const events = await FormContractModel.find();
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
        const events = await FormContractModel.find({ _id: id });
        res.status(200).json(events)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los eventos" })
    }
}


module.exports = {
    RegistrarFormContratos,
    RegistrarFormCheckList,
    RegistrarFormSurvey,
    RegistrarFormFeedback,

    ObtenerEventos,
    ObtenerEventoUnico
}

