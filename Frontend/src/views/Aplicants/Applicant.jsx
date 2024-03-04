import { useParams } from "react-router-dom";
import Profile from "../../components/Applicants/Profile/Profile";

function Applicant(){
    const { id } = useParams();
    return(
        <main className="content-wrap">
            <Profile id={id}/>
      </main>
    )
}

export default Applicant;