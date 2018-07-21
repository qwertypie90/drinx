import 'react-datetime/css/react-datetime.css';
import React from "react";
import { FormControl, FormGroup, Col, ControlLabel, DropdownButton, Form, HelpBlock, Checkbox, Radio, Button, MenuItem } from "react-bootstrap";
import './Navi.css';
import request from "superagent";
import TimeRange from 'react-time-range';
import moment from 'moment';
import Datetime from 'react-datetime';
import axios from 'axios';

class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)

        const now = moment();
        console.log('now', now);
        const time = now.toISOString()
        this.state = {
            name: "",
            address: "",
            phone: "",
            startTime: "",
            endTime: "",
            days: [],
            errors: {}
        };

        // this.handleFormChange = this.handleFormChange.bind(this)
        // this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }


    componentDidMount() {}

    onChange = (e) => {
        console.log('e.target.value', e.target.value);
        console.log('e.target.name', e.target.name);
        this.setState({
            [e.target.name]: e.target.value })
        // this.setState({address: e.target.value})
        // this.setState({phone: e.target.value})
    }
    onTimeChange = (key, value) => {
        console.log('key', key);
        console.log('value less seconds', value.format('HH:mm a'));
        let time = value.format('h:mm a');
        this.setState({
            [key]: value.toString() })
    }
    onDayChange = (e) => {
        console.log('onDayChange e.target.value', e.target.value);
        console.log('onDayChange e.target.name', e.target.name);
        const days = Array.from(new Set([...this.state.days, e.target.value]));
        this.setState({ days });
    }

    handleSubmit(event, name, address, phone, days, startTime, endTime) {
        event.preventDefault()
        console.log("at time of button press " + this.state.name + ", " + this.state.endTime + ", " + this.state.days)
        // console.log(this.state.id)

        axios({
            method: 'post',
            url: '/',
            data: {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
                days: this.state.days,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
            }

        });
        //     this.setState({    
        //             name: "",
        //             address: "",
        //             phone: "",
        //             startTime: "",
        //             endTime: "",
        //             days: [],
        //             showMultiple: false,
        //             errors: {} })
    }



    render() {
        console.log('this.state', this.state);
        const { name, address, phone, days, startTime, endTime, errors } = this.state;
        return (

            <div>
                  <div className="form-group">
                      <label htmlFor="author">Restaurant Name:</label>
                      <input
                          value={name}
                          onChange={this.onChange}
                          className='form-control'
                          type='text'
                          name='name'
                          placeholder='Restaurant Name'/>
                      {errors.name && <div className="alert alert-danger">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                      <label htmlFor="author">Address:</label>
                      <input
                          value={address}
                          onChange={this.onChange}
                          className='form-control'
                          type='text'
                          name='address'
                          placeholder='Address'/>
                      {errors.author && <div className="alert alert-danger">{errors.address}</div>}
                  </div>
                  <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <input
                          value={phone}
                          onChange={this.onChange}
                          className='form-control'
                          type='tel'
                          name='phone'
                          placeholder='Phone Number'/>
                      {errors.phone && <div className="alert alert-danger">{errors.phone}</div>}
                  </div>

                  {/*<div>
                                          <DropdownButton bsStyle="info" title="DAY" value={} onSelect={this.onChange} >
                                              <MenuItem key="1">Monday</MenuItem>
                                              <MenuItem key="2">Tuesday</MenuItem>
                                              <MenuItem key="3">Wednesday</MenuItem>
                                              <MenuItem key="4">Thursday</MenuItem>
                                              <MenuItem key="5">Friday</MenuItem>
                                              <MenuItem key="6">Saturday</MenuItem>
                                              <MenuItem key="7">Sunday</MenuItem>
                                          </DropdownButton>
                                    </div>*/}
                  {/*<Button bsStyle = "info" > Multiple Days? </Button>*/}

                  <div>
                        <Radio name="Monday" value="Monday" onChange={this.onDayChange}>Monday</Radio>
                        <Radio name="Tuesday" value="Tuesday" onChange={this.onDayChange}>Tuesday</Radio>
                        <Radio name="Wednesday" value="Wednesday" onChange={this.onDayChange}>Wednesday</Radio>
                        <Radio name="Thursday" value="Thursday" onChange={this.onDayChange}>Thursday</Radio>
                        <Radio name="Friday" value="Friday" onChange={this.onDayChange}>Friday</Radio>
                        <Radio name="Saturday" value="Saturday" onChange={this.onDayChange}>Saturday</Radio>
                        <Radio name="Sunday" value="Sunday" onChange={this.onDayChange}>Sunday</Radio>
                  </div> 
                  {/*<TimeRange
                                        startMoment={this.state.hhours.startTime}
                                        endMoment={this.state.hhours.endTime}
                                        onChange={this.returnFunction}
                                    />*/}
                  <div className="form-group">
                        <label htmlFor="startTime">Start Time:</label>
                        <Datetime
                              dateFormat={false}
                              onChange={(value) => this.onTimeChange('startTime', value)}
                              timeFormat={'h:mm a'}
                        />
                        {errors.startTime && <div className="alert alert-danger">{errors.startTime}</div>}
                  </div>
                  <div className="form-group">
                        <label htmlFor="endTime">End Time:</label>
                        <Datetime
                              dateFormat={false}
                              onChange={(value) => this.onTimeChange('endTime', value)}
                              timeFormat={'h:mm a'}
                        />
                        {errors.endTime && <div className="alert alert-danger">{errors.endTime}</div>}
                  </div>
                  <Button
                  onClick={this.handleSubmit} 
                  bsStyle = "info" > Submit To Database </Button> 
            </div>
        );
    }
}

export default Admin;