import Item from "./Item";

function Menu(){
    return(
        <nav>
            
            <section className="menu">
                <h3>Opciones</h3>
                <ul>
                    <Item link="/" icon="bi bi-house" title="Inicio"/>
                    <Item link="/empresas" icon="bi bi-building" title="Empresas"/>
                    <Item link="/aspirantes" icon="bi bi-person" title="Aspirantes"/>
                    <Item link="/profesiones" icon="bi bi-list-check" title="Profesiones"/>
                    <Item link="#" icon="bi bi-person-vcard" title="Postulate aquí"/>
                    <Item link="#" icon="bi bi-chat-left-text" title="Contacto"/>
                </ul>
            </section>         
        </nav>
    )
}

export default Menu;