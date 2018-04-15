import React from "react";
import { FormControl, FormGroup, Col, ControlLabel, Form, Checkbox, Button } from "react-bootstrap";

class Admin extends React.Component {


    render() {
        return ( 
               < div >

            < Form horizontal >
            < FormGroup controlId = "name" >
            < Col componentClass = { ControlLabel } sm = { 2 } >
            Resturant Name 
            < /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "name"
            placeholder = "Name" / >
            <
            /Col> <
            /FormGroup>

            <
            FormGroup controlId = "location" >
            <
            Col componentClass = { ControlLabel } sm = { 2 } >
            Address <
            /Col> <
            Col sm = { 10 } >
            <
            FormControl type = "name"
            placeholder = "Address" / >
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
            FormControl type = "number"
            placeholder = "Phone Number" / >
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
            FormControl type = "number"
            placeholder = "Happy Hours Times" / >
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
            FormControl type = "number"
            placeholder = "Happy Hours Times" / >
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
            FormControl type = "number"
            placeholder = "Happy Hours Times" / >
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
            FormControl type = "number"
            placeholder = "Happy Hours Times" / >
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
            FormControl type = "number"
            placeholder = "Happy Hours Times" / >
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
            FormControl type = "number"
            placeholder = "Happy Hours Times" / >
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
            FormControl type = "number"
            placeholder = "Happy Hours Times" / >
            <
            /Col> <
            /FormGroup>
                  </Form> 
 <Button bsStyle="info">Submit To Database</Button>

            </div>
        )
    }
}

export default Admin;