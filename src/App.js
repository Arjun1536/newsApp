
import './App.css';

import  { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import React from 'react';

import LoadingBar from 'react-top-loading-bar'


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App =()=> {
  const size =9
  // state = {
  //   progress:0
  // }
  const [progress,setProgress] =useState(0)
  
  
    return (
      <div>
        {/* <LoadingBar
        color='#f11946'
        progress= {this.state.progress}
        
      /> */}
        <NavBar />
        <News  size ={size} country ="in" category='science' />
        {/* <Router>
        
        
      <Routes>
        <Route path="/" element={<News size ={6} country ="in" category='science' />}></Route>
          
        
      </Routes>
    
      </Router> */}
      </div>
    )
  }

export default App
