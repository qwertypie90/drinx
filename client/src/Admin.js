import React from "react";
import { FormControl, FormGroup, Col, ControlLabel, Form, Button } from "react-bootstrap";
import API from "./utils/API";

class Admin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resturant: '',
      location: '',
      number: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    };
  }

  handleInputChange = event => {
      this.setState({ 
            [event.target.name]: event.target.value });
  };
  onSubmit = () => {
    API.saveNhResturants({
        name: this.state.resturant,
        address: this.state.location,
        number: this.state.number,
        Monday: this.state.monday,
        Tuesday: this.state.tuesday,
        Wednesday: this.state.wednesday,
        Thursday: this.state.thursday,
        Friday: this.state.friday,
        Saturday: this.state.saturday,
        Sunday:this.state.sunday
      }).then(
      function() {
        console.log("new resturant added");
      }
    );
  };


    render() {
        return ( 
        	< div >
            < Form horizontal>
            < FormGroup controlId = "name" >
            < Col componentClass = { ControlLabel } sm = { 2 } >
            Resturant Name 
            < /Col> <
            Col sm = { 10 } >
            <
            FormControl
            type = "text"
            name = "resturant"
            placeholder = "Name" 
            onChange={this.handleInputChange}
            / >
            </Col> 
            </FormGroup>

            <FormGroup controlId = "location" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Address <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl
            type = "text"
            name = "location"
            placeholder = "Address"
            onChange={this.handleInputChange}
            / >
            <
            /Col> <
            /FormGroup>

            <
            FormGroup controlId = "number" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Phone Number <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl 
            type = "number"
            placeholder = "Phone Number"
            name = "number"
            onChange={this.handleInputChange}
            / >
            <
            /Col> <
            /FormGroup>

             <
            FormGroup controlId = "monday" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Monday <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "text"
            placeholder = "Happy Hours Times" 
            name = "monday"
            onChange={this.handleInputChange}      
            / >
            <
            /Col> <
            /FormGroup>

            <
            FormGroup controlId = "tuesday" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Tuesday <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "text"
            placeholder = "Happy Hours Times" 
            name = "tuesday"
            onChange={this.handleInputChange}
            / >
            <
            /Col> <
            /FormGroup>
            <
            FormGroup controlId = "wednesday" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Wednesday <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "text"
            placeholder = "Happy Hours Times" 
            name = "wednesday"
            onChange={this.handleInputChange}      
            / >
            <
            /Col> <
            /FormGroup>
            <
            FormGroup controlId = "thursday" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Thursday <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "text"
            placeholder = "Happy Hours Times"
            name = "thursday"
            onChange={this.handleInputChange}
             / >
            <
            /Col> <
            /FormGroup>
            <
            FormGroup controlId = "friday" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Friday <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "text"
            placeholder = "Happy Hours Times"
            name = "friday"
            onChange={this.handleInputChange}
             / >
            <
            /Col> <
            /FormGroup>
            <
            FormGroup controlId = "saturday" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Saturday <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "text"
            placeholder = "Happy Hours Times"
            name = "saturday"
            onChange={this.handleInputChange}
             / >
            <
            /Col> <
            /FormGroup>
            <
            FormGroup controlId = "sunday" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Sunday <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "text"
            placeholder = "Happy Hours Times"
            name = "sunday"
            onChange={this.handleInputChange}
             / >
            <
            /Col> <
            /FormGroup>
            <Button 
            onClick={this.onSubmit}
            >Submit</Button>
   			</Form> <
            /div>
        )
    }
}

export default Admin;