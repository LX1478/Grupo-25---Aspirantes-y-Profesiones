import { useState, useEffectt } from "react";
import { useForm } from "react-hook-form";
import { postCompany } from "../../../services/companiesService";
import "../../../styles/RegisterCompany.css"
import validations from "../../../utils/validations";

function Form() {
    const [focusedInput, setFocusedInput] = useState(false);
    const [errores, setErrores] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const logo = watch("logo");

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

    const handleFocus = (id) => {
        setFocusedInput(id);
    }

    const handleBlur = () => {
        setFocusedInput(null);
    }

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
        else {
            console.log("No hubo respuesta del servidor toto ok");   
        }
    });

    const matchingPasswords = () => {
        if (watch("password") === watch("repassword")) {
            return true;
        }
        return "Las contraseñas no coinciden";
    };

    return (
        <div className="div-general">
            <form onSubmit={onSubmit} className="text-start d-flex flex-wrap flex-column form-company">

                <div className="input-container">
                    <label htmlFor="name"
                        className={`${focusedInput === 'name' ? 'focused' : ''} ${(errors.name || errores.name) ? "lb-error" : ""}`}>
                        Nombre
                    </label>
                    <input type="text" id="name"
                        className={`input-company ${(errors.name || errores.name) ? "input-error" : ""}`}
                        {...register("name", validations.commonValid(2, 120))}
                        onFocus={() => handleFocus('name')} onBlur={handleBlur} />

                    {errors.name && <p className="text-error">{errors.name.message}</p>}
                    {errores.name && <p className="text-error">{errores.name.msg}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="industry"
                        className={`${focusedInput === 'industry' ? 'focused' : ''} ${(errors.industry || errores.industry) ? "lb-error" : ""}`} >
                        Industria
                    </label>
                    <input type="text" id="industry"
                        className={`input-company ${(errors.industry || errores.industry) ? "input-error" : ""}`}
                        {...register("industry", validations.commonValid(2, 60))}
                        onFocus={() => handleFocus('industry')} onBlur={handleBlur} />

                    {errors.industry && <p className="text-error" >{errors.industry.message}</p>}
                    {errores.industry && <p className="text-error" >{errores.industry.msg}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="webSite" id="webSite"
                        className={`${focusedInput === 'webSite' ? 'focused' : ''} ${(errors.webSite || errores.webSite) ? "lb-error" : ""}`} >
                        Sitio Web
                    </label>
                    <input type="text" className={`input-company ${(errors.webSite || errores.webSite) ? "input-error" : ""}`}
                        {...register("webSite", validations.commonValid(2, 120))}
                        onFocus={() => handleFocus('webSite')} onBlur={handleBlur} f />

                    {errors.webSite && <p className="text-error" >{errors.webSite.message}</p>}
                    {errores.webSite && <p className="text-error">{errores.webSite.msg}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="location"
                        className={`${focusedInput === 'location' ? 'focused' : ''} ${(errors.location || errores.location) ? "lb-error" : ""}`} >
                        Dirección
                    </label>
                    <input type="text" id="location"
                        className={`input-company ${(errors.location || errores.location) ? "input-error" : ""}`}
                        {...register("location", validations.commonValid(2, 255))}
                        onFocus={() => handleFocus('location')} onBlur={handleBlur} />

                    {errors.location && <p className="text-error">{errors.location.message}</p>}
                    {errores.location && <p className="text-error">{errores.location.msg}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="description"
                        className={`${focusedInput === 'description' ? 'focused' : ''} ${(errors.description || errores.description) ? "lb-error" : ""}`} >
                        Descripción
                    </label>
                    <input type="text" id="description"
                        className={`input-company ${(errors.description || errores.description) ? "input-error" : ""}`}
                        {...register("description", validations.commonValid(2, 1024))}
                        onFocus={() => handleFocus('description')} onBlur={handleBlur} />

                    {errors.description && <p className="text-error">{errors.description.message}</p>}
                    {errores.description && <p className="text-error" >{errores.description.msg}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="logo" className={`${(errors.logo || errores.logo) ? "lb-error" : ""}`} >Logo</label>
                    <label htmlFor="logo" className="lb-file" >
                    {watch("logo") ? watch("logo")[0]?.name : "Seleccionar archivo"}
                    </label>
                    <input type="file" id="logo"
                        className="input-logo" {...register("logo", validations.logoValid())} />

                    {errors.logo && <p className="text-error">{errors.logo.message}</p>}
                    {errores.logo && <p className="text-error">{errores.logo.msg}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="email"
                        className={`${focusedInput === 'email' ? 'focused' : ''} ${(errors.email || errores.email) ? "lb-error" : ""}`} >
                        Email
                    </label>
                    <input type="text" id="email"
                        className={`input-company ${(errors.email || errores.email) ? "input-error" : ""}`}
                        {...register("email", validations.emailValid())}
                        onFocus={() => handleFocus('email')} onBlur={handleBlur} />

                    {errors.email && <p className="text-error">{errors.email.message}</p>}
                    {errores.email && <p className="text-error">{errores.email.msg}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="password"
                        className={`${focusedInput === 'password' ? 'focused' : ''} ${(errors.password || errores.password) ? "lb-error" : ""}`}  >
                        Contraseña
                    </label>
                    <input type="text" id="password"
                        className={`input-company ${(errors.password || errores.password) ? "input-error" : ""}`}
                        {...register("password", validations.passwordValid())}
                        onFocus={() => handleFocus('password')} onBlur={handleBlur} />

                    {errors.password && <p className="text-error">{errors.password.message}</p>}
                    {errores.password && <p className="text-error   ">{errores.password.msg}</p>}
                </div>

                <div className="input-container">
                    <label htmlFor="repassword"
                        className={`${focusedInput === 'repassword' ? 'focused' : ''} ${(errors.repassword || errores.repassword) ? "lb-error" : ""}`} >
                        Repetir Contraseña
                    </label>
                    <input type="text" id="repassword"
                        className={`input-company ${(errors.repassword || errores.repassword) ? "input-error" : ""}`}
                        {...register("repassword", validations.passwordValid(matchingPasswords()))}
                        onFocus={() => handleFocus('repassword')} onBlur={handleBlur} />

                    {errors.repassword && <p className="text-error">{errors.repassword.message}</p>}
                    {errores.repassword && <p className="text-error">{errores.repassword.msg}</p>}
                </div>

                <input type="submit" value="Enviar" className="btn-submit" />
            </form>
        </div>
    );
}

export default Form;