import SectionApplicants from '../Applicants/Section'
import SectionProfessions from '../Professions/Section'

function Content() {
    return (
        <main className="content-wrap">
            {/*Preventa*/}
            <header className="preventa">

                <h2>Búsqueda y selección</h2>
                <p className="text-center h5">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
                <div>
                    <img src="/images/banners/banner.jpg" alt="Rcursos Humanos" />
                </div>

                {/*Fin Encabezado*/}
            </header>
            {/*Fin Preventa*/}

            {/*Sección aspirantes*/}
            <SectionApplicants />
            {/*Fin sección aspirantes*/}


            {/*Sección de profesiones*/}
            <SectionProfessions />
            {/*Fin sección profesiones*/}

        </main>
    )
}

export default Content;