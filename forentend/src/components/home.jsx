import { Link } from "react-router-dom";
import '../css/home.css'
import Nav1 from "./nav1";

function Home(){

    return(
        <>
        <Nav1/>
            <section className="homepage_page">
                
            <h1>Signature Verification</h1><br />
            <p>To Verify the signature and to prevent fraud click button below</p>
            <div className="homecontainer">
                <Link className="getstarted" to={"./login"}><button className="homebtn">Get Started</button></Link>
            </div>
            
        </section>
        </>
    );
}
export default Home