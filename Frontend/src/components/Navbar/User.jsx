function User(props){
    return(
        <figure className="user">
        <div className="user-avatar">
            <img src={props.img} alt={props.alt}/>
        </div>
        <figcaption>
            {props.name}
        </figcaption>
        </figure>
    )
}

export default User;