import { Link } from "react-router-dom";
import '../css/nav1.css'

function Nav1(){

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ margin: 0, padding: 0}}>
                <div className="container-fluid">
                    <Link className="navbar-brand navtitle" to={'/'}>Signature Sense</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item navcls">
                            <Link className="nav-link active text-light" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item navcls">
                            <Link className="nav-link active text-light" to={"/login"}>Login</Link>
                            </li>
                            <li className="nav-item navcls">
                            <Link className="nav-link active text-light" to={"/about"}>About Us</Link>
                            </li>
                            <li className="nav-item navcls">
                            <Link className="nav-link active text-light" to={"/signup"}>Sign Up</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav1