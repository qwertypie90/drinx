import React from "react";
import {
	FormControl,
	FormGroup,
	Col,
	ControlLabel,
	Form,
	Button
} from "react-bootstrap";

class FAQ extends React.Component {
	
	render() {
		return (
			<div className="container">
				<form className="col-md-6">
					<FormGroup bsSize="small">
						<ControlLabel>Name</ControlLabel>
						<FormControl type="text" />
					</FormGroup>
					<FormGroup bsSize="small">
						<ControlLabel>Email</ControlLabel>
						<FormControl type="text" />
					</FormGroup>
					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>Send Feedback</ControlLabel>
						<FormControl
							componentClass="textarea"
						/>
					</FormGroup>
					<Button className="btn btn-success">Submit</Button>
				</form>
			</div>
		);
	}
}

export default FAQ;
