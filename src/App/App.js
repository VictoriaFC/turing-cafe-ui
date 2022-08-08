import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'

class App extends Component {
	constructor() {
		super()
		this.state = {
			reservations: [], 
			error: ''
		}
	}

	componentDidMount = () => {
		fetch('http://localhost:3001/api/v1/reservations')
		.then(response => response.json())
		.then(reservations => this.setState({reservations}))
		.catch(error => console.log(error.message))
	}

	render() {
		return(
			<div className="App">
			<h1 className='app-title'>Turing Cafe Reservations</h1>
			<div className='resy-form'>
			</div>
			<Reservations reservations={this.state.reservations}/>
			<div className='resy-container'>
			</div>
		</div>
		)
	}
}

export default App;
