import User from "./User";
import Menu from "./Menu";

function Navbar(){
    return(
        <header className="menu-wrap">
        <User img="/images/logo-dh.png" name="Digital House" alt="Logo Digital House"/>
        
        <Menu />
    </header>
    )
}

export default Navbar;