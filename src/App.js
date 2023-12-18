
import './App.css';

import  { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import React from 'react';

import LoadingBar from 'react-top-loading-bar'


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  size =9
  // state = {
  //   progress:0
  // }
  setProgress= (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        {/* <LoadingBar
        color='#f11946'
        progress= {this.state.progress}
        
      /> */}
        <NavBar />
        <News  size ={this.size} country ="in" category='science' />
        {/* <Router>
        
        
      <Routes>
        <Route path="/" element={<News size ={6} country ="in" category='science' />}></Route>
          
        
      </Routes>
    
      </Router> */}
      </div>
    )
  }
}

