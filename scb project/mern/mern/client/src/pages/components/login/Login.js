import React,{useState} from 'react'
import axios from 'axios';
import "../login/login.css"
import {useNavigate} from "react-router-dom"
const Login = ({setLoginUser}) => {
const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
    const [email]=useState("")
    const[password]=useState("")

    const check =()=>{
        if (user.email==="kiet@admin" & user.password==="kiet1234"){
            navigate("/admin")
        }
        else{
            console.log("enter vaild detalis")
        }
        
    }
    const login =()=>{
        axios.post("http://localhost:6969/Login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    navigate("/")})
    }
    return (
        <div className="App">
            
            <div className='login'>
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={check}>Login</div>
        </div></div>
    )
}
export default Login