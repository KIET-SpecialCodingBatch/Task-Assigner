import axios from "axios";
import { useState,useEffect } from "react";

const User=()=>{
    
    const [item,setItem] = useState([]);
    
    useEffect(() =>{
      axios.get('http://localhost:4000/gettask').then(
        arr => setItem(arr.data)
        
      )
    },[])
  return (
    <div>
      <center>
        
       {item.map(task => 
       <div key={task._id} >
        <h2>{task.Date}</h2>
        <h2>{task.Time}</h2>
        <h2>{task.Task}</h2>
       </div>)}
      </center>
    </div>
  )
}
export default User;