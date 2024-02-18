import {Link} from 'react-router-dom';
function Item(props){
    return(
          <li>
            <Link to={props.link}>
                <i className={props.icon} style="font-size: 1.2rem; color: cornflowerblue;"></i>
                        - {props.title}
            </Link>
          </li>
    )
}

export default Item;