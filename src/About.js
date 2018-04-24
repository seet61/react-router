import React, { Component } from 'react';

class About extends Component {
  render() {
  	//параметры
	const id = this.props.match.params.id;
	const name = this.props.match.params.name;
    return (
      	<h2>id: {id} name: {name}</h2>
    );
  }
}

export default About;
