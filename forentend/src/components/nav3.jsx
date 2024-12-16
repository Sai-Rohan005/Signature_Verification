import { Link } from "react-router-dom";
import '../css/nav3.css';

function Nav3() {
    return ( // Add return statement here
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand navtitle" to={"/"}>Signature Sense</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to={"/"}>Back</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav3;
