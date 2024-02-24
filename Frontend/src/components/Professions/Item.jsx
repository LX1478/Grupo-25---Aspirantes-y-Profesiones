function Item(props){
    return(
        <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + props.id} aria-expanded="false" aria-controls={"flush-collapse" + props.id}>
                    {props.name}
                </button>
                </h2>
                <div id={"flush-collapse" + props.id} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{props.description}</div>
                </div>
        </div>
    )
}

export default Item;