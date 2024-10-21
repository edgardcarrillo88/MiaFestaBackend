const SocialMediaModel = require('../models/socialmedia/post')


const CreatePost = async (req, res) => {
    console.log("Creando post");
    console.log(req.body);
    try {
        const data = new SocialMediaModel({
            descripcion: req.body.description,
            socialmedia: req.body.socialNetwork,
            Date: new Date(req.body.date)
        });
        await data.save();
        res.status(200).json({ message: "Post creado con exito" })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear el post" })
    }
}

const GetPost = async (req, res) => {
    console.log("Obteniendo datos de post");
    try {
        const events = await SocialMediaModel.find(
            { deleted: false }
        );
        console.log("Eventos: ", events.length);
        res.status(200).json(events)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los eventos" })
    }
}

const DeletePost = async (req, res) => {
    console.log("Borrando post");
    console.log(req.body);
    try {
        const data = await SocialMediaModel.findByIdAndUpdate(req.body.id, { deleted: true });
        await data.save();
        res.status(200).json({ message: "Post borrado con exito" })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar el post" })
    }
}

module.exports = {
    CreatePost,
    GetPost,
    DeletePost
}