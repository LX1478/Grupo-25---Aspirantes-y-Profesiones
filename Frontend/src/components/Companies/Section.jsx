import { getCompanies } from "../../services/companiesService";
import Company from "./Company";
import { useState, useEffect } from "react";

function Section(){
  const [companies, setCompanies] = useState([]);

    useEffect(() => {
      async function getCompaniesData(){
        const data = await getCompanies();
        setCompanies(data.data);
        
      }

      getCompaniesData();
    },[]);

    return(
        <section className="content companies">
        <h2>Empresas</h2>
        <div className="list-group shadow-sm p-3 mb-5 rounded text-center ">
            
            {Array.isArray(companies) && companies.map((company, i) => 
            (<Company 
                key={i}
                id={company.id} 
                logo={company.logo}  
                name={company.name} 
                location={company.location}
                link={company.webSite}
            />))}

        </div>
    </section>
    )
}

export default Section;