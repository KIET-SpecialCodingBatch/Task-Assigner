import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Home from './pages/Home';
import Admin from './pages/admin';
import User from './pages/user';
import Login from './pages/components/login/Login';
import Register from './pages/components/register/Register'
import {BrowserRouter, Route , Routes } from 'react-router-dom';

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/Login" exact element={<Login />}></Route>
      <Route path="/Register" exact element={<Register />}></Route>
      <Route path="/admin" exact element={<Admin />}></Route>
      <Route path="/user" exact element={<User />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;