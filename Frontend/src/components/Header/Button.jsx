import {Link} from 'react-router-dom';
function Button(props){
    return(
				<button>
					<Link to="#">
						<i className={props.icon} style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i>
					</Link>
				</button>
    )
}

export default Button;