import { getProfessions } from "../../services/professionsService";
import Button from "./Button";
import { useState, useEffect } from "react";

/* const professions = [
    "Abogado",
    "Arquitecto",
    "Botánico",
    "Computista",
    "Economista",
    "Técnico de sonido",
    "Profesor",
    "Linguista"
]; */

function Section(){

    const [professions, setProfessions] = useState([]);

    useEffect(() => {
        async function getProfessionsData(){
            const data = await getProfessions();
            console.log(data);
            setProfessions(data.data);
        }

        getProfessionsData();
    },[]);

    return(
        <section className="content profesiones">
        <h2 className="mt-3">Profesiones</h2>
        <div className="list-group shadow-sm p-3 mb-5 rounded">
            <h4 className="list-group-item list-group-item-action active text-center"
                aria-current="true">
                Listado de Profesiones
            </h4>

            {Array.isArray(professions) && professions.map((profession, i) => 
            <Button 
                key={i} 
                profession={profession.name}
            />)}
           
        </div>
        </section>
    )
}

export default Section;