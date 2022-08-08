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

	deleteResy = (id) => {
		fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
			method: 'DELETE'
		})
		.then(response => {
			if(response.ok) {
				const filterReservations = this.state.reservations.filter(reservation => reservation.id !== id)
				this.setState({
					reservations: filterReservations
				})
			} else {
				console.log('No reservations with that name. Please try again.')
				return this.setState({error: 'Something went wrong. Please try again.'})
			}
		})
	}

	render() {
		return(
			<div className="App">
			<h1 className='app-title'>Turing Cafe Reservations</h1>
			<div className='resy-form'>
				<Form addResy={this.addResy}/>
			</div>
			<Reservations reservations={this.state.reservations} deleteResy={this.deleteResy}/>
			<div className='resy-container'>
			</div>
		</div>
		)
	}
}

export default App;
