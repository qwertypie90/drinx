import React, { Component } from 'react';
import './App.css';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import Navi from './Navi'
// import Fields from './Fields'


class App extends Component {
    
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)

        this.state = {
          day: "What Day?",
          area:"Area?"
        };

    };

  componentDidMount() { 
  }
  
    // handleClick(e) {
    //     console.log(e.target.getAttribute('eventKey'));
    // }

handleSelect(event, key){
console.log(event)
this.setState({[key]: event})
}


render() {
    return (

      // <Step1 area={this.state.area} day={this.state.day} handleSelect={this.handleSelect} />
      // <Step2 />

      <div>
  <Navi />

  <ButtonToolbar>
    <DropdownButton
      bsSize="large"
      title={this.state.day}
      id="dropdown-size-large"
      onSelect = {(event) => {this.handleSelect(event, 'day')}}
    >
      <MenuItem eventKey="Monday">Monday</MenuItem>
      <MenuItem eventKey="Tuesday">Tuesday</MenuItem>
      <MenuItem eventKey="Wednesday">Wednesday</MenuItem>
      <MenuItem eventKey="Thursday">Thursday</MenuItem>
      <MenuItem eventKey="Friday">Friday</MenuItem>
      <MenuItem eventKey="Saturday">Saturday</MenuItem>
      <MenuItem eventKey="Sunday">Sunday</MenuItem>
    </DropdownButton>
  </ButtonToolbar>
    <ButtonToolbar>
    <DropdownButton
      bsSize="large"
      title={this.state.area}
      id="dropdown-size-large"
      onSelect = {(event) => {this.handleSelect(event, 'area')}}

    >
     <MenuItem eventKey="North Hollywood, CA">North Hollywood, CA</MenuItem>
      <MenuItem eventKey="n/a">More Cities Coming Soon</MenuItem>

        </DropdownButton>
  </ButtonToolbar>



</div>

    )
}

}

export default App;