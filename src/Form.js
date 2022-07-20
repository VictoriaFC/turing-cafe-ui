import React, { Component } from 'react'
import '/Users/victoriafox-collis/turing/frontend/mod3/turing-cafe-ui/src/Form.css'

class Form extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			date: '',
			time: '',
			number: ''
		}
	}
	
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}
	
	submitResy = (event) => {
		event.preventDefault()
		const newResy = {
			id: Date.now(),
			...this.state 
		}
		this.props.addResy(newResy)
		this.clearInputs()
	}

	clearInputs = () => {
		this.setState({ name: '', date: '', time: '', number: ''})
	}

	render() {
		return(
			<form>
				<input 
					type='text'
					placeholder='Name'
					name='name'
					value={this.state.name}
					onChange={event => this.handleChange(event)}
				/>
				<input 
					type='text'
					placeholder='Date (mm/dd)'
					name='date'
					value={this.state.date}
					onChange={event => this.handleChange(event)}
				/>

				<input 
					type='text'
					placeholder='Time'
					name='time'
					value={this.state.time}
					onChange={event => this.handleChange(event)}
				/>

				<input 
					type='text'
					placeholder='Number of Guests'
					name='number'
					value={this.state.number}
					onChange={event => this.handleChange(event)}
				/>
				<button>Submit</button>
			</form>
		)
	}
}

export default Form 