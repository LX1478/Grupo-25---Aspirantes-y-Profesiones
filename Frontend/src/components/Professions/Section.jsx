import { getProfessions } from "../../services/professionsService";
import Item from "./Item";
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

function Section() {
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    async function getProfessionsData() {
      const data = await getProfessions();
      console.log(data);
      setProfessions(data.data);
    }

    getProfessionsData();
  }, []);

  return (
    <section className="content profesiones">
      <h2 className="mt-3">Profesiones</h2>
      <div className="list-group shadow-sm p-3 mb-5 rounded">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {Array.isArray(professions) &&
            professions.map((profession, i) => (
              <Item
                key={i}
                name={profession.name}
                description={profession.description}
                id={profession.id}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Section;
