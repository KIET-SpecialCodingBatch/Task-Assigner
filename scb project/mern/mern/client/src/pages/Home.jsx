import React from 'react';

import { useNavigate } from 'react-router-dom';
import "../Home.css"
import "./components/login/Login"

function Home() {

    const navigate = useNavigate();


    return (
    <div className='buttonstyle'>
        
        <button className='b1'   onClick={()=>{navigate("/login")}}>
       admin
            
        </button><br/>
        <br></br>
        
       <button className='b2' onClick={()=>{navigate("/user")}}>
        _user
      
         </button>
    </div>
    
  )
}

export default Home