const { check, body } = require('express-validator');
const path = require("path");
const { Company } = require("../database/models");

let validations = [
    check("name").notEmpty().withMessage("Escribe el nombre de tu empresa").bail()
        .isLength({ min: 2, max: 120 }).withMessage("Tiene que ser entre 2 y 120 carácteres").bail(),
        
    check("description").notEmpty().withMessage("Escribe la descripción de tu empresa")
        .isLength({ min: 2, max: 1024 }).withMessage("Tiene que ser entre 2 y 120 carácteres").bail(),

    check("industry").notEmpty().withMessage("Escribe la industria de tu empresa")
        .isLength({ min: 2, max: 60 }).withMessage("Tiene que ser entre 2 y 120 carácteres").bail(),

    check("webSite").notEmpty().withMessage("Escribe el sitio web de tu empresa")
        .isLength({ min: 2, max: 120 }).withMessage("Tiene que ser entre 2 y 120 carácteres").bail(),

    check("location").notEmpty().withMessage("Escibe la ubicación de tu empresa")
        .isLength({ min: 2, max: 255 }).withMessage("Tiene que ser entre 2 y 120 carácteres").bail(),

    check("email")
        .notEmpty().withMessage("Escribe un correo de contacto").bail()
        .isEmail().withMessage("Escribe un formato de correo válido").bail()
        .custom( async(value, { req }) => {
            const correo = await Company.findOne({
                raw: true,
                where: {
                    email: req.body.email
                }
            }); 
            if(correo){
                throw new Error ("Este email ya está registrado. Use otro por favor");
            }
            return true;
        }),

    check("password")
        .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isLength({ min: 8, max: 120 }).withMessage("La contraseña debe tener un minimo de 8 carácteres").bail()
        .isStrongPassword({ minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})
        .withMessage("Debe tener letra mayúscula, letra minúscula, número y carácter especial"),

    check("repassword")
        .notEmpty().withMessage("Tienes que repetir la contraseña").bail()
        .custom((value, { req }) => {
            if(req.body.password !== req.body.repassword){
                throw new Error ('Las contraseñas no coinciden');
            }

            return true;
        }),     

    check("logo").custom((value, { req }) => {
        if(req.fileInvalid){
            throw new Error (`Las extensiones de archivo permitidas son .jpg, .jpeg, .png y .gif`);
        };
        return true;
    })
];

module.exports = validations;