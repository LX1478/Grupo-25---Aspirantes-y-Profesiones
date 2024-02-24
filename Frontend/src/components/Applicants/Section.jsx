import { getApplicants } from "../../services/applicantsService";
import Person from "./Person";
import { useState, useEffect } from "react";

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
                img={applicant.image} 
                alt={applicant.name} 
                name={applicant.name + ' ' + applicant.surname} 
                profession={applicant.profession.name}
                id={applicant.id}
            />))}

        </article>
    </section>
    )
}

export default Section;