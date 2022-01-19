import './App.css';
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Body from './components/body/Body';
import Footer from "./components/footer/Footer"

function App() {
  return (

    <Router>
           <div className="App">
                  <Header/>
                  <Main/>
                  <Body/>
                  <Footer/>
           </div>
    </Router>
   
  );
}

export default App;
