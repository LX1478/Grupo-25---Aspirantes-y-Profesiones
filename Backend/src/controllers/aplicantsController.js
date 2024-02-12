const { Aplicant } = require('../database/models');

const aplicantsController = {
    all: async(req, res) => {
        try{
            const aplicants = await Aplicant.findAll();

            res.status(200).json({
                meta:{
                status:res.statusCode,
                },
                data: aplicants
            })
        }catch(error){
            console.error("Error al obtener los solicitantes:", error);
                res.status(500).json({
                    error: "Error al procesar la solicitud"
                });
        }
    },
    list: (req, res) => {

    },
    add: (req, res) => {

    },
    edit: (req, res) => {

    },
    remove: (req, res) => {

    }
}

module.exports = aplicantsController;