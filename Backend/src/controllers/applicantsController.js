const { Applicant } = require('../database/models');

const applicantsController = {
    all: async(req, res) => {
        try{
            const applicants = await Applicant.findAll();

            res.status(200).json({
                meta:{
                status:res.statusCode,
                url: req.protocol + '://' + req.get('host') + req.url,
                length: applicants.length
                },
                data: applicants
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
            const applicant = await Applicant.findByPk(req.params.id);

            res.status(200).json({
                meta:{
                status:res.statusCode,
                url: req.protocol + '://' + req.get('host') + req.url,
                },
                data: applicant
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
            await Applicant.create({
                dni: body.dni,
                name: body.name,
                surname: body.surname,
                email: body.email,
                phone: body.phone,
                urlLinkedin: body.urlLinkedin,
                dateOfBirth: body.dateOfBirth,
                sex: body.sex,
                image: req.file ? req.file.filename : 'default.png',
                professionId: body.professionId,
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
    edit: async (req, res) => {
        const { body } = req;
        try{
            await Applicant.update({
                dni: body.dni,
                name: body.name,
                surname: body.surname,
                email: body.email,
                phone: body.phone,
                urlLinkedin: body.urlLinkedin,
                dateOfBirth: body.dateOfBirth,
                sex: body.sex,
                proffesionId: body.proffesionId,
            }, {
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
    },
    remove: async (req, res) => {
        try{
            await Applicant.destroy({
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

module.exports = applicantsController;