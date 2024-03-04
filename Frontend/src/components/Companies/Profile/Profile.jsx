import { useEffect, useState } from "react";
import { getCompany } from "../../../services/companiesService";

function Profile({ id }) {
  const [company, setCompany] = useState({});

  useEffect(() => {
    async function getCompanyData() {
      const data = await getCompany(id);
      setCompany(data.data);
      console.log(data);
    }

    getCompanyData();
  }, []);

  return (
    <>
      <header className="preventa">
        <h2>{company.name}</h2>
      </header>
      <div
        className="row align-items-start"
      >
        <div className="col-md-5">
          <img
            src={company.logo}
            className="mx-auto d-block"
            alt={company.name}
            style={{ width: "250px", borderRadius: "10%", marginTop: "1rem" }}
          ></img>
        </div>
        <div className="col-md-7">
          <div style={{ width: "35rem" }}>
            <div className="card-body">
              <h5 className="card-title">{company.industry}</h5>
              <p className="card-text" style={{ marginTop: "0.5rem" }}>
                {company.description}
              </p>
            </div>
            <ul
              className="list-group list-group-flush"
              style={{ marginTop: "1rem" }}
            >
              <li className="list-group-item">
                <i className="bi bi-geo-alt-fill"></i> {company.location}
              </li>
              <li className="list-group-item">
                <i className="bi bi-envelope"></i> {company.email}
              </li>
            </ul>
            <div className="card-body" style={{ marginTop: "2rem" }}>
              <a href="#" className="card-link">
                {company.webSite}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
