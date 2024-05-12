import React from 'react'
import Founder from '../Founder/Founder'
import './Tax.css'

function Tax() {
  return (
    <div>
        <div>
            <Founder/>
        </div>
        <div className='taxdiv'>
            <h2>Tax & Documents</h2>
            <p>Key dates and information can be found in the <span style={{color:"srgb(0.372549 ,0.345098, 1)"}}> AngelList Help Center.</span> </p>
            <div className='sepdiv2'>
                <p>If your address or other details changed during 2023, please update your tax information. Otherwise, no action is required.s</p>
            </div>
            <div>
                <h4 style={{color:"srgb(0.372549 ,0.345098, 1)"}}>Tax Information</h4>
                <div className='fund_2'>
                <h4>Make your first investment to set up your funding account</h4>
                <p style={{marginTop:"-1.2rem"}}>Once you have an investing entity, you'll be able to submit any required tax information here</p>
                
            </div>
            <div style={{marginTop:"8rem"}} className='aatag'>
                <a>Share Feedback</a>
                <a>Get Help</a>
                <a> Disclosures</a>
                <a>Privacy Policy</a>
                <a>Terms of Service</a>
            </div>
            </div>
          
        </div>
        
        
      
    </div>
  )
}

export default Tax
