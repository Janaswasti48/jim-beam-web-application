import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Routes,Route} from "react-router-dom";
import {publicRoutes} from "./Routes/PublicRoutes"
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="">
      <Navbar>
      <Routes>
        {
          publicRoutes.map(({path,Component}, index) => <Route key = {index} path = {path} element = {<Component/>}></Route>)
        }
        {/* <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route> */}
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
