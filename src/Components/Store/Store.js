import React, { useEffect,useState } from 'react'
import './Store.css'
import logo4 from './austin.jpg'
import logo5 from './back.jpg'
import logo6 from './sky.jpg'
import Home from '../Home/Home'
import axios from 'axios';
function Store() {
    const [news,setNews]=useState("");
    useEffect(()=>{
       document.body.classList.add("body_no_3") 
    })
    const getNews=async()=>{
        try{
            const result=axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-04-11&sortBy=publishedAt&apiKey=4c99172ade1d46f9ba383e0806e180ec")
            setNews(result.data);
            console.log(news);
        }catch(err){
            console.log(err);
        }
    }
    // getNews();
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
                    <h4>
                        Title
                    </h4>
                </div>
                <div>
                    <img src={logo5}></img>
                    <p>Hot news</p>
                    <h4>Title</h4>
                </div>
                <div>
                    <img src={logo6}></img>
                    <p>Hot news</p>
                    <h4>
                        Title
                    </h4>
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
            <div onClick={(e)=>{
                e.preventDefault();
                window.location.href='/Chatbot';
            }} className='card2_div'>
                <div>
                <img className="image"src={logo5}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Face Recognition</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo4}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Stock Price Prediction</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo6}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>AI Cybersecurity</h4>
                {/* <p>Autonomous automobiles</p> */}
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
                <h4>Recommendation</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo5}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Sentiment Analysis</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            <div className='card2_div'>
                <div>
                <img className="image"src={logo4}></img>
                </div>
                <div>
                <p>Location,Address</p>
                <h4>Title</h4>
                {/* <p>A small description</p> */}
                </div>
            </div>
            </div>
        </div>
        
    </div>
    </div>
  </>)
}

export default Store
