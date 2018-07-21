import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";

class About extends Component {
	render() {
		return (
			<div className="container">
				<h1>DRIINX!</h1>
				<p>
					Our mission is simple, to help the citizens in LA find the
					best happy hours in their neighborhoods.
				</p>
				<h2>Our Team</h2>
				<h3>Dianna Simmons</h3>
				<h3>Lindsey McDowell</h3>
			</div>
		);
	}
}

export default About;
