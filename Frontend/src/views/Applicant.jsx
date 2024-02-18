import Profile from "../components/Applicants/Profile";

function Applicant(id){
    return (
        <main className="content-wrap">
            <Profile id={id} />
        </main>
    )
}

export default Applicant;