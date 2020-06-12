import React from "react";

// Libraries
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Screens
import Home from "./screens/HomeScreen/Home";
import Portfolio from "./screens/Portfolio";
import Service from './screens/Service';
import Resume from './screens/Resume';
import Blog from './screens/Blog';
import Contact from './screens/Contact';

function App() {
  return (
     
    <Router>    
      
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/Service">
          <Service />
        </Route>  
        <Route path="/resume">
          <Resume />
        </Route>  
        <Route path="/blog">
          <Blog />
        </Route>   
        <Route path="/contact">
          <Contact />
        </Route>      
        
      
        <Redirect from="/" to="/home" />
      </Switch>
     

    </Router>
  );
}

export default App;
