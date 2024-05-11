import React, { useEffect,useState } from 'react'
import './Startup.css'
function Startup() {
    useEffect(()=>{
        document.body.classList.add("bhdy")
      },[])
    //   const[input,setInput]=useState(`<div><input type="text" placeholder="hello"><input/></div>`)
    //   const addinput=()=>{
    //     setInput(input)
    //   }
  return (
    <div className='yaybuddy'>
        <div className='innerdiv'>
            <h2>Tell us about your Startup</h2>
            <h4>Name of your Startup</h4>
            <input  className="wholeinp"type='text' placeholder='Name of your startup'></input>
            <div className='confdiv'>
            <h4>Age of your Startup</h4>
            <h4>GST Reg No.</h4>
            </div>
            <div className='confdiv2'>
            <input className='wholeinp2' type="text" placeholder='Name of your startup'></input>
            
            <input className='wholeinp2' type="text" placeholder='Name of the startup'></input>
            
            </div>
            <h4>Core team members</h4>
            <div style={{display:"flex"}}>
            <input className="wholeinp2"type='text' placeholder='Name'></input>
            <input className="wholeinp2"type='text' value ='Founder'></input>
            {/* <button onClick={addinput}>+</button> */}
            </div>
            <div style={{display:"flex"}}>
            <input className="wholeinp2"type='text' placeholder='Name'></input>
            <input className="wholeinp2"type='text' value ='Co-Founder'></input>
            </div>
            <div style={{display:"flex"}}>
            <input className="wholeinp2"type='text' placeholder='Name'></input>
            <input className="wholeinp2"type='text' value ='Cheif Executive Officer'></input>
            </div>
            <div style={{display:"flex"}}>
            <input className="wholeinp2"type='text' placeholder='Name'></input>
            <input className="wholeinp2"type='text' value ='Cheif Finance Officer'></input>
            </div>
            <div style={{display:"flex"}}>
            <input className="wholeinp2"type='text' placeholder='Name'></input>
            <input className="wholeinp2"type='text' value ='Cheif Technology Officer'></input>
            </div>
            <h4>Number of Employees in your startup(approx)</h4>
            <input className="wholeinp"type='text' placeholder='Name of the Startup'></input>
        </div>
        <div className='yaybudy'>
            <h2>Describe your Startup</h2>
            <h4>Description</h4>
            <select className='wholeinp6'>
                <option >What kind of startup are you</option>
            </select>
            <textarea></textarea>
            <button>Next</button>
        </div>
    </div>
  )
}

export default Startup
