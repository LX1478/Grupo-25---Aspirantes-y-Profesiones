import { useEffect, useState } from "react";
import { getApplicant } from "../../../services/applicantsService";

function Profile({ id }) {
  const [applicant, setApplicant] = useState({});

  useEffect(() => {
    async function getApplicantData() {
      const data = await getApplicant(id);
      const applicant = {
        ...data.data,
        profession: data.data.profession.name,
      };
      setApplicant(applicant);
      console.log(data);
    }

    getApplicantData();
  }, []);

  return (
    <>
      <header className="preventa">
        <h2>{applicant.name + " " + applicant.surname}</h2>
      </header>

      <div className="row align-items-start">
        <div className="col-md-4">
          <img
            src={applicant.image}
            className="mx-auto d-block"
            alt={applicant.name + " " + applicant.surname}
            style={{ width: "250px", borderRadius: "50%" }}
          ></img>
        </div>
        <div className="col-md-8">
          <div style={{ width: "35rem" }}>
            <div className="card-body">
              <h5 className="card-title">{applicant.profession}</h5>
              <p className="card-text" style={{ marginTop: "0.5rem" }}>
                {applicant.description}
              </p>
            </div>
            <ul
              className="list-group list-group-flush"
              style={{ marginTop: "1rem" }}
            >
              <li className="list-group-item">
                <i className="bi bi-geo-alt-fill"></i> {applicant.location}
              </li>
              <li className="list-group-item">
                <i className="bi bi-telephone-fill"></i> {applicant.phone}
              </li>
              <li className="list-group-item">
                <i className="bi bi-envelope"></i> {applicant.email}
              </li>
            </ul>
            <div className="card-body" style={{ marginTop: "2rem" }}>
              <a href="#" className="card-link">
                {applicant.urlLinkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
