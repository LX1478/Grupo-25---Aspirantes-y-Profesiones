import { getApplicants } from "../../services/applicantsService";
import Person from "./Person";
import { useState, useEffect } from "react";

/* const applicants = [
    {
        img: "applicant1.jpg",
        alt: "Gloria",
        name: "Gloria Medina",
        profession: "Administrador"
      },
      {
        img: "applicant2.jpg",
        alt: "Daniel Fuentes",
        name: "Daniel Fuentes",
        profession: "Tecnico de sonido"
      },
      {
        img: "applicant3.jpg",
        alt: "Lee Chim",
        name: "Tim Tim",
        profession: "Linguista"
      },
      {
        img: "applicant4.jpg",
        alt: "Rocio",
        name: "Rocio Carle",
        profession: "Profesor"
      },
      {
        img: "applicant5.jpg",
        alt: "Victor",
        name: "Victor Fuentes",
        profession: "Computista"
      },
      {
        img: "applicant6.jpg",
        alt: "Luis",
        name: "Luis Fuentes",
        profession: "Economista"
      }
] */

function Section(){
  const [applicants, setApplicants] = useState([]);

    useEffect(() => {
      async function getApplicantsData(){
        const data = await getApplicants();
        setApplicants(data.data);
      }

      getApplicantsData();
    },[]);

    return(
        <section className="content aspirantes">
        <h2>Aspirantes</h2>
        <article className="person-boxes">
            
            {Array.isArray(applicants) && applicants.map((applicant, i) => 
            (<Person 
                key={i} 
                img={"../../../public/images/applicants/" + applicant.img} 
                alt={applicant.name} 
                name={applicant.name + ' ' + applicant.surname} 
                profession={applicant.profession.name}
            />))}

        </article>
    </section>
    )
}

export default Section;