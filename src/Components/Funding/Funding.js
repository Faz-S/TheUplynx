import React, { useEffect } from 'react'
import './Funding.css'
import Founder from '../Founder/Founder'
function Funding() {
    useEffect(()=>{
        document.body.classList.add("fundbdy")
    })
  return (
    <div>
        <div>
            <Founder/>
        </div>
        <div className='fund'>
            <h2>Funding Accounts</h2>
            <div className='fund_2'>
                <h4>Make your first investment to set up your funding account</h4>
                <button>Find Syndicates to join</button>
            </div>
            <div style={{marginTop:"15rem"}} className='aatag'>
                <a>Share Feedback</a>
                <a>Get Help</a>
                <a> Disclosures</a>
                <a>Privacy Policy</a>
                <a>Terms of Service</a>
            </div>
            
        </div>
        
        
      
    </div>
  )
}

export default Funding
