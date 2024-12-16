import { Link } from "react-router-dom";
import '../css/nav2.css'

function Nav2(){

    return(
        <>
            <nav className="navbar navbar-expand-lg nav2nav">
            <div className="container">
                <Link className="navbar-brand navtitle" to={"/"}>Signature Sense</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown nav2drop">
                    <Link className="nav-link dropdown-toggle text-light" to={"#"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Details
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item text-dark" to={"/profile"}>Profile</Link></li>
                        {/* <li><Link className="dropdown-item text-light" to="#">Another action</Link></li> */}
                        <li><Link className="dropdown-item text-dark" to={"/"}>Sign out</Link></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    );
}
export default Nav2