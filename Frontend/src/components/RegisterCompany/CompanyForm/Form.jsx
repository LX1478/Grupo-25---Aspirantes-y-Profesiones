import { useState, useEffectt } from "react";
import { useForm } from "react-hook-form";
import { postCompany } from "../../../services/companiesService";

function Form() {
    const [errores, setErrores] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const updateErrors = (e) => {
        setErrores({
            name: e.name,
            description: e.description,
            industry: e.industry,
            webSite: e.webSite,
            location: e.location,
            email: e.email,
            password: e.password,
            repassword: e.repassword,
            logo: e.logo
        });
    };
    
    const onSubmit = handleSubmit(async (data) => {
        let formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            // Ignorar la imagen, ya que ya la hemos agregado
            if (key !== 'logo') {
                formData.append(key, value);
            }
        });
        formData.append("logo", data.logo[0]);

        const response = await postCompany(formData);
        if (response) {
            console.log("La respuesta del servidor fue", response);
            updateErrors(response.errores);
        }
        else console.log("No hubo respuesta del servidor toto ok");
    });

    /* Validaciones */
    const commonValid = (min, max) => {
        return {
            required: `Este campo es obligatorio`,
            minLength: {
                value: min,
                message: "Debe tener un minimo de 2 carácteres"
            },
            maxLength: {
                value: max,
                message: "Debe tener un máximo de 2 carácteres"
            }
        };
    };
    const emailValid = () => {
        return {
            required: "El email es obligatorio",
            pattern: {
                value: "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/",
                message: "El email no es válido"
            }
        };
    };

    const logoValid = () => {
        return {
            validate: (value) => {
                if(value[0]){
                    const type = value[0].type;
                    if (type !== "image/jpg" && type !== "image/jpeg" && type !== "image/png" && type !== "image/gif") {
                        return "Los formatos permitidos son: jpg, jpeg, png, gif";
                    }
                }
                return true;
            }
        };
    };

    const passwordValid = (validatep = true) => {
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
                message: "Debe tener de minimo una letra mayúscula, una letra minúscula, un número y un carácter especial"
            },
            validate: validatep
        };
    };

    const matchingPasswords = () => {
        if (watch("password") === watch("repassword")) {
            return true;
        }
        return "Las contraseñas no coinciden";
    };

    return (
        <div>
            <form onSubmit={onSubmit}
                style={{ width: "200px", display: "flex", flexWrap: "wrap", flexDirection: "column", margin: "20px 0px", height:"500px"}}>

                <label htmlFor="">Nombre</label>
                <input type="text" {...register("name", commonValid(2, 120))} />
                {errors.name && <p>{errors.name.message}</p> }
                {errores.name && <p>{errores.name.msg}</p> }

                <label htmlFor="">Descripcion</label>
                <input type="text" {...register("description", commonValid(2, 1024))} />
                {errors.description && <p>{errors.description.message}</p> }
                {errores.description && <p>{errores.description.msg}</p> }

                <label htmlFor="">Industria</label>
                <input type="text" {...register("industry", commonValid(2, 60))} />
                {errors.industry && <p>{errors.industry.message}</p> }
                {errores.industry && <p>{errores.industry.msg}</p> }

                <label htmlFor="">Sitio Web</label>
                <input type="text" {...register("webSite", commonValid(2, 120))} />
                {errors.webSite && <p>{errors.webSite.message}</p> }
                {errores.webSite && <p>{errores.webSite.msg}</p> }

                <label htmlFor="">Dirección</label>
                <input type="text" {...register("location", commonValid(2, 255))} />
                {errors.location && <p>{errors.location.message}</p> }
                {errores.location && <p>{errores.location.msg}</p> }

                <label htmlFor="">Logo</label>
                <input type="file" {...register("logo", logoValid())} />
                {errors.logo && <p>{errors.logo.message}</p> }
                {errores.logo && <p>{errores.logo.msg}</p> }

                <label htmlFor="">email</label>
                <input type="text" {...register("email", emailValid())} />
                {errors.email && <p>{errors.email.message}</p> }
                {errores.email && <p>{errores.email.msg}</p> }

                <label htmlFor="" >Contraseña</label>
                <input type="text" {...register("password", passwordValid())} />
                {errors.password && <p>{errors.password.message}</p>}
                {errores.password && <p>{errores.password.msg}</p> }

                <label htmlFor="">Repetir Contraseña</label>
                <input type="text" {...register("repassword", passwordValid(matchingPasswords))} />
                {errors.repassword && <p>{errors.repassword.message}</p>}
                {errores.repassword && <p>{errores.repassword.msg}</p> }

                <input type="submit" value="enviar" />
            </form>
        </div>
    );
}

export default Form;