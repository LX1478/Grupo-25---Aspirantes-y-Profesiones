const { Company } = require('../database/models');

module.exports = {
    all: async(req, res) => {
        try{
            let companies = await Company.findAll();

            companies = companies.map(company => {
                return {
                        ...company.dataValues,
                        logo: req.protocol + '://' + req.get('host') + '/images/company/' + company.logo,
                }
            })

            res.status(200).json({
                meta:{
                status:res.statusCode,
                url: req.protocol + '://' + req.get('host') + req.url,
                length: companies.length
                },
                data: companies
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
            let company = await Company.findByPk(req.params.id);

            company = {
                ...company.dataValues,
                logo: req.protocol + '://' + req.get('host') + '/images/company/' + company.logo
            }

            res.status(200).json({
                meta:{
                status:res.statusCode,
                url: req.protocol + '://' + req.get('host') + req.url,
                },
                data: company
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
            await Company.create({
                name: body.name,
                description: body.description,
                industry: body.industry,
                webSite: body.webSite,
                logo: req.file ? req.file.filename : 'default.png',
                email: body.email,
                password: body.password,
                location: body.location,
            });

            return res.status(201).json({
                meta: {
                    status: res.statusCode,
                    url: req.protocol + '://' + req.get('host') + req.url,
                },
            });

        }catch(error){
            console.error("Error al obtener los solicitantes:", error);
            res.status(500).json({
                error: "Error al procesar la solicitud",
            });
        }
    },

    edit: async(req, res) => {
        const { body } = req;
        try{
            await Company.update({
                name: body.name,
                description: body.description,
                industry: body.industry,
                webSite: body.webSite,
                email: body.email,
                password: body.password,
                location: body.location,
            },{
                where: {
                    id: req.params.id
                }
            });

            return res.status(201).json({
                meta: {
                    status: res.statusCode,
                    url: req.protocol + '://' + req.get('host') + req.url
                },
            });

        }catch(error){
            console.error("Error al obtener los solicitantes:", error);
            res.status(500).json({
                error: "Error al procesar la solicitud"
            });
        }
    },

    remove: async(req, res) => {
        try{
            await Company.destroy({
                where: {
                    id: req.params.id,
                }
            });

            return res.status(200).json({
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