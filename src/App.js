import './App.css';
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

function App() {
  return (

    <Router>
           <div className="App">
                  <Header/>
                  <Main/>
                  <Footer/>
           </div>
    </Router>
   
  );
}

export default App;
