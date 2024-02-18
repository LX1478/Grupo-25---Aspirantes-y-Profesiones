import { useEffect, useState } from "react";
import { getApplicant } from "../../services/applicantsService";

function Profile(id){

    const [applicant, setApplicant] = useState("");

    useEffect(() => {
        async function getApplicantData(){
            const data = await getApplicant(id);

            setApplicant(data.data);
        }

        getApplicantData();
    },[]);

    return (
        <>
            <header className="preventa">
                <h2>{applicant.name + " " + applicant.surname}</h2>
            </header>
            <div className="">
            </div> 
        </>
    )
}

export default Profile;