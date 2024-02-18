import Item from "./Item";

function Menu(){
    return(
        <nav>
            <section className="menu">
                <h3>Opciones</h3>
                <ul>
                    <Item link="#" icon="bi bi-building" title="Empresas"/>
                    <Item link="#" icon="bi bi-person" title="Aspirantes"/>
                    <Item link="#" icon="bi bi-list-check" title="Profesiones"/>
                    <Item link="#" icon="bi bi-person-vcard" title="Postulate aquí"/>
                    <Item link="#" icon="bi bi-chat-left-text" title="Contacto"/>
                </ul>
            </section>
        </nav>
    )
}

export default Menu;