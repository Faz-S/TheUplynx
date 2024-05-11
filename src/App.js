import React from "react";

import { 
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Store from "./Components/Store/Store";
import Login from "./Components/Login/Login";
import Log from "./Components/Log/Log";
import Log2 from "./Components/Log/Log2";
import Profile from "./Components/Profile/Profile";




function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/Home' element={<Store/>}/>
        <Route path='/Dashboard' element={<Store/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/log' element={<Log/>}/>
        <Route path='/log2' element={<Log2/>}/>
        
      

          
       </Routes> 
    
      
      
      
      
    </BrowserRouter>
    
)}
export default App;