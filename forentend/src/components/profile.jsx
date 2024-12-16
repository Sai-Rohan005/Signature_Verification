import { useState } from "react";
import axios from 'axios';
import Nav3 from "./nav3";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




// function Profile(){



//     let navigate=useNavigate();
//     const [username,setusername]=useState();
//     const [email,setemail]=useState();
//     const [Createdon,setCreatedon]=useState();

//     useEffect(() => {
//         handleLoad();
//     }, []);
//     const handleLoad = async() => {
//         let resp=await axios.post('http://localhost:5051/profile')
//         if(resp.data.status===404){
//             alert(resp.data.message);
//             navigate('/login');


//         }
//         setusername(resp.data.username);
//         setemail(resp.data.mail);
//         setCreatedon(resp.data.created);
//     };
    
//     return(
//         <>
//         <Nav3/>
//         <div className="container" onLoad={handleLoad}>
//         <div className="card">
//             <div className="card-header">
//                 Profile
//             </div>
//             <ul className="list-group list-group-flush">
//                 <li className="list-group-item">User Name:- {username}</li>
//                 <li className="list-group-item">E-mail :- {email}</li>
//                 <li className="list-group-item">Created on :- {Createdon}</li>
//             </ul>
//             </div>
//         </div>
//         </>
//     );
// }
function Profile() {
    let navigate = useNavigate();
    const [username, setusername] = useState();
    const [email, setemail] = useState();
    const [Createdon, setCreatedon] = useState();

    useEffect(() => {
        handleLoad();
    }, []);

    const handleLoad = async () => {
        let resp = await axios.post('http://localhost:5051/profile');
        if (resp.data.status === 404) {
            alert(resp.data.message);
            navigate('/login');
        }
        setusername(resp.data.username);
        setemail(resp.data.mail);
        setCreatedon(resp.data.created);
    };

    return (
        <>
            <Nav3 />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card" style={{ width: '48rem' }}>
                    <div className="card-header">Profile</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">User Name: {username}</li>
                        <li className="list-group-item">E-mail: {email}</li>
                        <li className="list-group-item">Created on: {Createdon}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Profile;
