import React, { Component } from 'react';
import { MenuItem, ButtonToolbar, DropdownButton, Button, Jumbotron} from "react-bootstrap";
import API from "./utils/API";
import './index.css';



class Home extends Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)

        this.state = {
            resturants: [],
            day: "What Day?",
            area: "Area?"
        };

    };
    handleSelect(event, key) {
        console.log(event)
        this.setState({
            [key]: event })
    }

    loadAll = () => {
       API.Resturants()
      .then(res =>
        this.setState({ resturants: res.data, name: "", 
            address: "", number: "" })
      )
      .catch(err => console.log(err));
    };
    
    Specifc = day => {
        API.getSpecificResturants(day)
        .then(res =>
        this.setState({ resturants: res.data, name: "", 
            address: "", number: "", day: "" })
      )
      .catch(err => console.log(err));
    };

    onSubmit = () => {
         API.getSpecificResturants(this.state.day)
        .then(res =>
        this.setState({ resturants: res.data, name: "", 
            address: "", number: "", day: "" })
      )
      .catch(err => console.log(err));
    }



    render() {
        return ( 
          < div >
            < ButtonToolbar >
            < DropdownButton bsSize = "large"
            title = { this.state.day } id = "dropdown-size-large"
            onSelect = {
                event => {
                    this.handleSelect(event, "day");
                }
            } >
            <
            MenuItem eventKey = "Monday" > Monday < /MenuItem> <
            MenuItem eventKey = "Tuesday" > Tuesday < /MenuItem> <
            MenuItem eventKey = "Wednesday" > Wednesday < /MenuItem> <
            MenuItem eventKey = "Thursday" > Thursday < /MenuItem> <
            MenuItem eventKey = "Friday" > Friday < /MenuItem> <
            MenuItem eventKey = "Saturday" > Saturday < /MenuItem> <
            MenuItem eventKey = "Sunday" > Sunday < /MenuItem> <
            /DropdownButton> 
            < DropdownButton bsSize = "large"
            title = { this.state.area } id = "dropdown-size-large"
            onSelect = {
                event => {
                    this.handleSelect(event, "area");
                }
            } >
            <
            MenuItem eventKey = "North Hollywood, CA" > North Hollywood, CA < /MenuItem> <
            MenuItem eventKey = "n/a" > More Cities Coming Soon < /MenuItem> <
            /DropdownButton>

            <Button bsSize = "large"
            onClick={this.onSubmit}
            >Submit</Button>
            </ButtonToolbar> 
              <h1>Search Results</h1>
            {this.state.resturants.length ? (
              
              <ol>
                {this.state.resturants.map(nhresturants => {
                  return (

                    <li key={nhresturants._id}>
                      <h1> {nhresturants.name} </h1>
                      <h2> {nhresturants.address} </h2>
                      <h2> {nhresturants.number} </h2>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div> 

        )
    };
};

export default Home;