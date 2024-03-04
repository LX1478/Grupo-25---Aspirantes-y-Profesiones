import User from "./User";
import Menu from "./Menu";

function NavbarMobile() {
  return (
        <nav className="mobile">
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"><img src="/images/logo-dh.png" style={{width: "50px"}}/></button>
                <div className="menu-wrap">
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLeftLabel">
                    <User
                img="/images/logo-dh.png"
                name="Digital House"
                alt="Logo Digital House"
                /></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Menu />
                </div>
                </div>
                </div>
        </nav>
);
}

export default NavbarMobile;