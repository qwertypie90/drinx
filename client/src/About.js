import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";


	const styles = {
  heading: {
    textAlign: "center",
  },
  name: {
  	textAlign: "center",
  	borderBottom: "solid 2px black",
  	padding: 30,
  	margin: 30
  }
};

class About extends Component {
	render() {
		return (
			<div className="container">
				<h1 style={styles.heading}>DRIINX!</h1>
				<p style={styles.heading}>
					Our mission is simple, to help the citizens in LA find the
					best happy hours in their neighborhoods.
				</p>
				<div className="row" style={styles.heading}>
					<h2>Our Team</h2>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<h3 style={styles.name}>Dianna Simmons</h3>
						</div>
					<div className="col=sm-6">
						<h3 style={styles.name}>Lindsey McDowell</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
