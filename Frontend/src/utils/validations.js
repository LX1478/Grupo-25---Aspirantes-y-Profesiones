const validations = {
    commonValid: (min, max) => {
        return {
            required: `Este campo es obligatorio`,
            minLength: {
                value: min,
                message: `Debe tener un minimo de ${min} carácteres`
            },
            maxLength: {
                value: max,
                message: `Debe tener un máximo de ${max} carácteres`
            }
        };
    },
    emailValid: () => {
        return {
            required: "El email es obligatorio",
            pattern: {
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "El email no es válido"
            }
        };
    },

    logoValid: () => {
        return {
            validate: (value) => {
                if (value[0]) {
                    let type = value[0].type;
                    if (type !== "image/jpg" && type !== "image/jpeg" && type !== "image/png" && type !== "image/gif") {
                        return "Los formatos permitidos son: jpg, jpeg, png, gif";
                    }
                }
                return true;
            }
        };
    },

    passwordValid: (validatep = true) => {
        return {
            required: "La contraseña es obligatoria",
            minLength: {
                value: 8,
                message: "Debe tener un minimo de 8 carácteres"
            },
            maxLength: {
                value: 120,
                message: "Debe tener un máximo de 120 carácteres"
            },
            pattern: {
                value: /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?¡¿]).*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: "Debe tener una letra mayúscula, una letra minúscula, un número y un carácter especial"
            },
            validate: validatep
        };
    },
}

export default validations;