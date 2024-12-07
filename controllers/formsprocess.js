const FormContractModel = require('../models/forms/contract');
const FormSurveyModel = require('../models/forms/survey');
const FormfeedbackModel = require('../models/forms/feedback');


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
    console.log(req.body);
    const SurveyResponse = {
        Bandejas: req.body.ratings[0],
        Mesas: req.body.ratings[1],
        Animacion: req.body.ratings[2],
        TratoAsistentes: req.body.ratings[3],
        TratoContrato: req.body.ratings[4],
        Recomendaciones: req.body.ratings[6],
        Comentarios: req.body.comment,
    }
    try {
        const data = new FormSurveyModel(SurveyResponse);
        await data.save();
        console.log("Carga realizada con exito");
        res.status(200).json({ message: "Carga realizada con exito" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al cargar la encuesta" })

    }
}



const RegistrarFormFeedback = async (req, res) => {
    console.log("Ejecutando la carga de form de feedback");
    console.log(req.body);
    const feedbackResponse = {
        Satisfaccion: req.body.questions[0].answer,
        Recomendacion: req.body.questions[1].answer,
        Problemas: req.body.questions[2].answer,
        NuevasCaracteristicas: req.body.questions[3].answer,
        ContactoUltimoMes: req.body.questions[4].answer,

        SatisfaccionComments: req.body.questions[0].description,
        RecomendacionComments: req.body.questions[1].description,
        ProblemasComments: req.body.questions[2].description,
        NuevasCaracteristicasComments: req.body.questions[3].description,
        ContactoUltimoMesComments: req.body.questions[4].description,
        
        CalificacionProducto: req.body.ratings[0],
        CalificacionFacilidadUso: req.body.ratings[1],
        CalificacionAtencion: req.body.ratings[2],
        Comentarios: req.body.additionalComments,
    }
    console.log(feedbackResponse);
    try {
        const data = new FormfeedbackModel(feedbackResponse);
        await data.save();
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
    console.log(req.query);
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

