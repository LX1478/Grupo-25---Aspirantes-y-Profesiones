import "./App.css";
import "./normalize.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HeaderSearch from "./components/Header/HeaderSearch";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./views/Home";
import Applicants from "./views/Aplicants/Applicants";
import Professions from "./views/Professions";
import Companies from "./views/Companies/Companies";
import RegisterCompany from "./views/RegisterCompany";
import ApplicantProfile from "./views/Aplicants/Applicant";
import CompanyProfile from "./views/Companies/Company";

function App() {
  return (
    <div className="dashboard">
      {/*Sección de acceso*/}
      <HeaderSearch />
      {/*Fin Sección de acceso*/}

      {/*Sección menu*/}
      <Navbar />
      {/*Fin Sección menu*/}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aspirantes" element={<Applicants />} />
        <Route path="/aspirantes/:id" element={<ApplicantProfile />} />
        <Route path="/profesiones" element={<Professions />} />
        <Route path="/empresas" element={<Companies />} />
        <Route path="/empresas/:id" element={<CompanyProfile />} />
        <Route path="/registro/empresa" element={<RegisterCompany />} />
      </Routes>
    </div>
  );
}

export default App;
