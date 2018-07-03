import React, { Component } from 'react';
import { MenuItem, ButtonToolbar, DropdownButton, } from "react-bootstrap";


class Home extends Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this)

        this.state = {
            day: "What Day?",
            area: "Area?"
        };

    };
    handleSelect(event, key) {
        console.log(event)
        this.setState({
            [key]: event })
    }
    render() {
        return ( 
          < div >
            <
            ButtonToolbar >
            <
            DropdownButton bsSize = "large"
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
            /DropdownButton> <
            /ButtonToolbar> <
            ButtonToolbar >
            <
            DropdownButton bsSize = "large"
            title = { this.state.area } id = "dropdown-size-large"
            onSelect = {
                event => {
                    this.handleSelect(event, "area");
                }
            } >
            <
            MenuItem eventKey = "North Hollywood, CA" > North Hollywood, CA < /MenuItem> <
            MenuItem eventKey = "n/a" > More Cities Coming Soon < /MenuItem> <
            /DropdownButton> <
            /ButtonToolbar> <
            /div>
        )
    };
};

export default Home;