import axios from "axios";
import { useState,useEffect } from "react";
import "./admin.css"
const Admin=()=>{
    
    const [item,setItem] = useState([]);
    const [newDate,setNewDate] = useState('');
    const [newTime,setNewTime] = useState('');
    const [newTask,setNewTask] = useState('');
    useEffect(() =>{
      axios.get('http://localhost:4000/gettask').then(
        arr => setItem(arr.data)
        
      )
    },[]) 
    const submitHandler = e =>{
      e.preventDefault();
      axios.post('http://localhost:4000/addtask',{Date:newDate,Time:newTime,Task:newTask}).then(
        arr => setItem(arr.data)
      )
    }
    const deleteHandler = id =>{
      axios.delete(`http://localhost:4000/delete/${id}`).then(
        arr => setItem(arr.data)
      )
    }
  
  
  return (
    <div className="admin">
      <center>
        <form onSubmit={submitHandler}>
          <p>Date</p><input type ="text" value={newDate} onChange={(e)=>setNewDate(e.target.value)}/><br/>
          
          <p>Time</p><input type ="text" value={newTime} onChange={(e)=>setNewTime(e.target.value)}/><br/>
          
          <p>Task</p><input type ="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/><br/>
          <input type="submit"value="submit"/>
        </form><br/>
       {item.map(task => 
       <div key={task._id} >
        <h2>{task.Date}</h2><br/>
        <h2>{task.Time}</h2><br/>

        <h2>{task.Task}</h2><br/>
       </div>)}
        
      </center>


    </div>
  )
    
}

export default Admin;