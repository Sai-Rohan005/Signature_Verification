import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Nav1 from "./nav1";


function Signup(){

    let navigate=useNavigate();

    const [form_data,setForm_data]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        "file":null
    })

    const handlechange=(e)=>{
        const {name,value}=e.target
        setForm_data({
            ...form_data,
            [name]:value
    })
    }
    let file_details;
    const handelfile=(e)=>{
        file_details=e.target.files[0];
        setForm_data({
            ...form_data,
            "file":file_details
    })

        
    }
    const[ResponseMessage,setResponseMessage]=useState();
    const [bool,setBool]=useState();

    const handlesignup=async(e)=>{ 
        e.preventDefault();
        const formData=new FormData();

        formData.append('username',form_data.username);
        formData.append('email',form_data.email);
        formData.append('password',form_data.password);
        formData.append('confirmPassword',form_data.confirmPassword);
        if(form_data.file){
            formData.append('sigfile',form_data.file);
        }
        try{
            console.log(formData);
            let response=await axios.post('http://localhost:5051/signup-form',formData,{
                headers:{
                    "Content-Type":'multipart/form-data',
                }
            });
            const resp=response.data;
            if(resp.status===404){
                setResponseMessage(resp.message || "There was error in process");
                setBool(false);
            }
            
            else{
                setResponseMessage("Signup Done Succesfully");
                setBool(true);
                navigate('/login');
            }
        }
        catch(error){
            console.log(error);
            setResponseMessage("There was an error in submitting the form");
            setBool(false);
        }

    }



    return(
        <>
        <Nav1/><br /><br />
        <div className="container">
        <div className="row align-items-center justify-content-center vh-100" data-bs-theme="light">
            <div className="col-12 col-md-6">
            <section className="card shadow p-3">
                <h1 className="text-center">Create Account</h1>
                <p className="text-center">
                Fill in the details below to create your account.
                </p>
                <form action="/signup-form" method="post" onSubmit={handlesignup} encType="multipart/form-data">
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="firstname">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="username" onChange={handlechange} value={form_data.username}
                        placeholder="User Name"
                        required
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email" onChange={handlechange} value={form_data.email}
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                    />
                    <small id="emailHelp" className="form-text small">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    className="form-control"
                    id="password" name="password" onChange={handlechange} value={form_data.password}
                    placeholder="Password"
                    required
                    />
                </div><br />
                <div className="form-group">
                    <label htmlFor="confirm password">Confirm Password</label>
                    <input
                    type="password"
                    className="form-control"
                    id="confirmpassword" name="confirmPassword" onChange={handlechange} value={form_data.confirmPassword}
                    placeholder="confirmPassword"
                    required
                    />

                </div><br />
                <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Set your signature</label>
                <input className="form-control" type="file" id="formFile"  name="sigfile" onChange={handelfile} />
                </div>
                <div className="text-center m-2">
                    <button type="submit" className="custom-button btn btn-primary">
                    Create Account
                    </button>
                </div>
                </form>
                <p className="text-center">
                <Link to={"/login"} className="text-center">Already have an account? Login here</Link>
                <p style={{color: bool ? 'green':'red'}}>{ResponseMessage}</p>
                </p>
            </section>
            </div>
        </div>
        </div>
        </>
    )
}

export default Signup