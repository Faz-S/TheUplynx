import React,{useState} from "react";

import { 
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Store from "./Components/Store/Store";
import Login from "./Components/Login/Login";
import Founder from "./Components/Founder/Founder";
import Profile from "./Components/Profile/Profile";
import Startup from "./Components/Startup/Startup";
import Home2 from "./Components/Home2/Home2";
import Chatbot from "./Components/Chatbot/Chatbot";



function App() {
  // const [choose, setChoose] = useState("")
  // if(setChoose.choose==="founder"){
  //   return(<div>
  //     <Store/>
  //   </div>)
  // }
  // else if(setChoose.choose==="investor"){
  //   return(<div>
  //     <Profile/>
  //   </div>)

  // }
  return (
   
    <BrowserRouter>
      <Routes>
        
        <Route index element={<Login/>}/>
        <Route path='/Home2' element={<Home2/>} />
        
        <Route path='/Home' element={<Store/>}/>
        <Route path='/Dashboard' element={<Store/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path="/Startup" element={<Startup/>}/>
        <Route path="/Chatbot" element={<Chatbot/>}/>
        <Route path="/founder" element={<Founder/>}/>
       </Routes> 
      
    
      
      
      
      
    </BrowserRouter>
    
)}
export default App;