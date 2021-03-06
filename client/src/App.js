import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navi from './Navi';
import About from './About';
import Admin from './Admin';
import Home from './Home';
import FAQ from './FAQ';
// import Fields from './Fields'


class App extends Component {
    
  
    // handleClick(e) {
    //     console.log(e.target.getAttribute('eventKey'));
    // }



render() {
    return (

      // <Step1 area={this.state.area} day={this.state.day} handleSelect={this.handleSelect} />
      // <Step2 />
  <Router>
    <div>
      <Navi />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </div>
  </Router>
  
    )
}

}

export default App;