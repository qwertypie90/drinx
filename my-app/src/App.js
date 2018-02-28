import React, { Component } from 'react';
import './App.css';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

import Navi from './Navi'
import Fields from './Fields'


class App extends Component {
    
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)

        this.state = {
          day: "",
          area:""
        };

    };

  componentDidMount() { 
  }


    getDay() {
    // var day = document.getElementById("dropdown-size-large");
    // document.getElementById("dropdown-size-large").innerHTML = 
    // day.options[day.selectedIndex].text;
}

  onInputChange(day, area) {
  this.setState({day}),
  this.setState({area})
  }
  
    handleClick(e) {
        console.log(e.target.getAttribute('eventKey'));
    }

handleSelect(event,eventKey){
console.log("event " + event)
console.log(eventKey);
 }

render() {
  const {day, area} = this.state;

    return (
      <div>
  <Navi />

  <ButtonToolbar>
    <DropdownButton
      bsSize="large"
      title="Choose Your Day"
      id="dropdown-size-large"
      onSelect = {(event, eventKey) => {this.handleSelect(event, eventKey)}}
    >
      <MenuItem eventKey="1">Monday</MenuItem>
      <MenuItem eventKey="2">Tuesday</MenuItem>
      <MenuItem eventKey="3">Wednesday</MenuItem>
      <MenuItem eventKey="4">Thursday</MenuItem>
      <MenuItem eventKey="5">Friday</MenuItem>
      <MenuItem eventKey="6">Saturday</MenuItem>
      <MenuItem eventKey="7">Sunday</MenuItem>
    </DropdownButton>
  </ButtonToolbar>
    <ButtonToolbar>
    <DropdownButton
      bsSize="large"
      title="Area"
      id="dropdown-size-large"
    >
     <MenuItem eventKey="1">North Hollywood, CA</MenuItem>
      <MenuItem eventKey="2">More Cities Coming Soon</MenuItem>

        </DropdownButton>
  </ButtonToolbar>



</div>

    )
}

}

export default App;