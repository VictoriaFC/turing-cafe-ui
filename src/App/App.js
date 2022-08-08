import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

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

	addResy = (newResy) => {
		fetch('http://localhost:3001/api/v1/reservations', {
			method: 'POST', 
			body: JSON.stringify(newResy),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			if(!response.ok) {
				throw Error('oops')
			} else {
				return response.json()
			}
		})
		.then(reservation => this.setState({reservations: [...this.state.reservations, reservation]}))
		.catch(error => console.log(error.message))
	}

	render() {
		return(
			<div className="App">
			<h1 className='app-title'>Turing Cafe Reservations</h1>
			<div className='resy-form'>
				<Form addResy={this.addResy}/>
			</div>
			<Reservations reservations={this.state.reservations}/>
			<div className='resy-container'>
			</div>
		</div>
		)
	}
}

export default App;
