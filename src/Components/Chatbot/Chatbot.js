import React, { useEffect } from 'react'
import "./Chatbot.css"
function Chatbot() {
    useEffect(()=>{
        document.body.classList.add("chat")

    },[])
  return (
    <div >
        <div style={{width:"90%",height:"80vh",margin:"4rem",padding:"1rem",backgroundColor:"white",}}>
            Hello
        </div>
    </div>
  )
}

export default Chatbot
