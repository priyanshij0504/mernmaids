import React, { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Home from './home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cart from './cart';

function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <Router>
        <div>
        <Navbar />
        <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path='/Cart' Component={Cart} />
        </Routes>
        </div>
        </div>
      </Router>
    </main>
  )
}

export default App