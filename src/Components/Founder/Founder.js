import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Founder.css"
// import logo_2 from './med.png'
const Founder= ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Portfolio",
            // name:"Dashboard",
            icon:<FaTh/>
        },
       
        {
            path:"/Funding",
            // name:"Notification",
            icon:<FaRegChartBar/>
        },
        
       
         {
            path:"/Tax",
            //  name:"Log out",
            icon:<FaThList/>
         }
    ]
    return (
        <div className="container_67">
           <div  className="sidebar_67">
               <div className="top_section">
                {/* <img  className="img-890"src={logo_2}></img> */}
                   {/* <h1 style={{display:"block"} } className="logo"><span className='span-1'>Med</span><span className='span-2'>vault</span></h1> */}
                   <div style={{marginLeft: isOpen ? "40px" : "-5px"}} className="bars">
                       {/* <FaBars onClick={toggle}/> */}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link_678" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display:"block" }} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Founder;