import { useParams } from "react-router-dom";
import Profile from "../../components/Companies/Profile/Profile";

function Company(){
    const { id } = useParams();
    return(
        <main className="content-wrap">
            <Profile id={id}/>
      </main>
    )
}

export default Company;