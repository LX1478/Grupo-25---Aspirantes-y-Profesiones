import { getCompanies } from "../../services/companiesService";
import Company from "./Company";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Companies.css"

function Section() {
  const [companies, setCompanies] = useState([]);

    useEffect(() => {
      async function getCompaniesData(){
        const data = await getCompanies();
        setCompanies(data.data);
      }
      getCompaniesData();
    },[]);

  return (
    <div className="content companies">

      <h2>Empresas</h2>

      <section className="container-fluid section-btn">
        <Link to={"/registro/empresa"}>
          <button className="container-fluid btn btn-outline-primary registerLink">Registra tu empresa</button>
        </Link>
      </section>

      <section className="list-group shadow-sm p-3 mb-5 rounded text-center ">

        {Array.isArray(companies) && companies.map((company, i) =>
        (<Company
          key={i}
          id={company.id}
          logo={"/images/companies/" + company.logo} 
          name={company.name}
          location={company.location}
          link={company.webSite}
        />))}

      </section>
    </div>
  )
}

export default Section;