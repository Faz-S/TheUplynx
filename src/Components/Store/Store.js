import React, { useEffect } from 'react'
import './Store.css'
import logo4 from './austin.jpg'
import logo5 from './back.jpg'
import logo6 from './sky.jpg'
import Home from '../Home/Home'
function Store() {
    useEffect(()=>{
       document.body.classList.add("body_no_2") 
    })
  return (<>
    <div>
        <Home/>
        <div className='storebdy'>
        <div className='static_nav'>
            <p className='uplynx'>UPLYNX</p>
            <a  className="atag "href="/Startup">STARTUP</a>
        </div>
        <div className='innerstrbdy'>
            <input type='text' placeholder='Search'></input>
            <p>Category Titles</p>
            <div className='btndiv'>
                <button>AI News</button>
                <button>AR/VR</button>
                <button>Blockchain</button>
                <button>ML/DL</button>
            </div>
            <div className='card_div'>
                <div>
                    <img src={logo4}></img>
                    <p>Hot news</p>
                    <h4>Title</h4>
                </div>
                <div>
                    <img src={logo5}></img>
                    <p>Hot news</p>
                    <h4>Title</h4>
                </div>
                <div>
                    <img src={logo6}></img>
                    <p>Hot news</p>
                    <h4>Title</h4>
                </div>
            </div>
            
            <div className='mmain_div'>
                <div className='ggboys'>
                    <p>Suggested</p>
                    <h3>Suggestion</h3>
                    <p className='onlyp' >
                    this is picture taken by the ai developed by the microsft Organization
                    </p>
                    
                </div>
                <div>
                    <img  className="clsimg"src={logo6}></img>
                </div>
            </div>
            <p>Category Titles</p>
            <div className='container_of_card'>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo5}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Title</h4>
                <p>A small description</p>
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo4}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Title</h4>
                <p>A small description</p>
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo6}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Title</h4>
                <p>A small description</p>
                </div>
            </div>
            </div>
            <div className='container_of_card'>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo6}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Title</h4>
                <p>A small description</p>
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo5}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Title</h4>
                <p>A small description</p>
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo4}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Title</h4>
                <p>A small description</p>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    </div>
  </>)
}

export default Store
