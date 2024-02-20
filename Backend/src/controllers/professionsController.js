const { Profession } = require('../database/models');

const professionsController = {
    all: async(req, res) => {
        try{
            const professions = await Profession.findAll();

            res.status(200).json({
                meta:{
                status:res.statusCode,
                url: req.protocol + '://' + req.get('host') + req.url,
                },
                data: professions
            });
        }catch(error){
            console.error("Error al obtener los solicitantes:", error);
                res.status(500).json({
                    error: "Error al procesar la solicitud"
            });
        }
    },
    detail: async(req, res) => {
        try{
            const profession = await Profession.findByPk(req.params.id);

            res.status(200).json({
                meta:{
                status:res.statusCode,
                url: req.protocol + '://' + req.get('host') + req.url,
                },
                data: profession
            });
        }catch(error){
            console.error("Error al obtener los solicitantes:", error);
                res.status(500).json({
                    error: "Error al procesar la solicitud"
                });
        }
    },
    add: async(req, res) => {
        const { body } = req;
        try{
            await Profession.create({
                name: body.name,
                description: body.description,
            });

            return res.status(201).json({
                meta: {
                    status: res.statusCode,
                    url: req.protocol + '://' + req.get('host') + req.url
                },
            });
        }catch(error){
            console.error("Error al procesar: ", error);
            res.status(500).json({
                error: "Error al procesar la solicitud"
            });
        }
    },
    edit: async(req, res) => {
        const { body } = req;
        try{
            await Profession.update({
                name: body.name,
                description: body.description,
            },{
                where: {
                    id: req.params.id
                }
            });

            return res.status(200).json({
                meta: {
                    status: res.statusCode,
                    url: req.protocol + '://' + req.get('host') + req.url
                },
            });
        }catch(error){
            console.error("Error al procesar: ", error);
            res.status(500).json({
                error: "Error al procesar la solicitud"
            });
        }

    },
    remove: async(req, res) => {
        try{
            await Profession.destroy({
                where: {
                    id: req.params.id,
                }
            });
            res.status(200).json({
                meta: {
                    status: res.statusCode,
                    url: req.protocol + '://' + req.get('host') + req.url
                }
            });
        }catch(error){
            console.error("Error al procesar: ", error);
            res.status(500).json({
                error: "Error al procesar la solicitud"
            });
        }
    }
}

module.exports = professionsController;