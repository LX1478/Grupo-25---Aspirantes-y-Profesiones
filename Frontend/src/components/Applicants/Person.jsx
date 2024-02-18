import { Link } from 'react-router-dom';
import Actions from './Actions/Actions';

function Person(props){
    return(
        <Link to={""} className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="box-avatar">
            <img src={props.img} alt={props.alt}/>
        </div>

        <div className="box-bio">
            <h2 className="bio-name">{props.name}</h2>
            <p className="bio-position">{props.profession}</p>
        </div>

        <Actions />
    </Link>
    )
}

export default Person;