import { Link,useNavigate} from "react-router-dom";
import '../css/login.css'
import { useState } from "react"
import axios from 'axios'
import Nav1 from "./nav1";

function Login(){
  const navigate=useNavigate()
  const [form_data,setForm_data]= useState({
      username:'',
      password:''
  });

  const handlechange=(e)=>{
      const {name,value}=e.target;
      setForm_data({
          ...form_data,
          [name]:value
      });
  }
  
  const[ResponseMessage,setResponseMessage]=useState();
  const[bool,setBool]=useState();
  
  const handlelogin=async(e)=>{
      e.preventDefault();
      try{
          const response = await axios.post('http://localhost:5051/login-account',form_data);
      const resp=response.data;
      if(resp.status===404){
          setResponseMessage(resp.message || "There was a error in submitting form");
          setBool(false)
      }
      else{
          setResponseMessage(resp.message || "Login done sucessfilly");
          setBool(true)
          navigate('/verification');
          
          
      }
      }
      catch(error){
          console.error(error);
          setResponseMessage("There was a error in submiting form");
          setBool(false);
      }

      
  }
  

    return(
        <>
        <Nav1/>
        <div className="logdiv">
        <div className="container">
      <div className="row align-items-center justify-content-center vh-100">
        <section className="col-12 col-md-6" data-bs-theme="light">
          <div className="card shadow text-center p-3">
            <h1>Login</h1>
            <p>
              Access your account to manage and view your signature verifications.
            </p>
            <form action="/login-account" method="post" onSubmit={handlelogin}>
              <div className="form-group text-left">
                {/* <label htmlFor="username">Username</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="username" name="username" onChange={handlechange} value={form_data.username} 
                  placeholder="Username "
                  required
                />
              </div><br /><b></b>
              <div className="form-group text-left">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  id="password" name="password" onChange={handlechange} value={form_data.password} 
                  placeholder="Password"
                  required
                />
              </div>
              <button className="btn btn-primary m-2 text-center">Sign in</button>
              <Link to={"/signup"}><p><span>Don't have an account?</span> Create Account</p></Link>
            </form>
            
            <p style={{color : bool ? 'green' : 'red'}}>{ResponseMessage}</p>
          </div>
        </section>
      </div>
    </div>
    </div>
    </>
    );
}
export default Login