import './App.css'
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Loginform from "./Components/Loginform";
import Privacy from "./Components/Privacy";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Loginform" element={<Loginform />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Privacy" element={<Privacy />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
