import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import { Header } from './components/Header';
import axios from "axios";
import {Context,server} from './main';

function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/profile" element={<Profile/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/Register" element={<Register/>}  />
      </Routes>
    </Router>
  )
}

export default App;
