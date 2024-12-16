import Login from "./components/login";
import Signup from "./components/signup";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Verify from "./components/verification";
import Profile from "./components/profile";
import About from "./components/about";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/verification" element={<Verify/>}></Route>
    </Routes>
  </BrowserRouter>
  
  );
}
export default App