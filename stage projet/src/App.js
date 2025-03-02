import './App.css'
import Home from "./Home";
import Contact from "./Contact";
import Signup from "./Signup";
import Loginform from "./Loginform";
import Privacy from "./Privacy";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <h1>Hello</h1>
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
