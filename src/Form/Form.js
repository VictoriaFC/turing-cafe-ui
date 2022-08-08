import React, { Component } from 'react'
import './Form.css'

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
		this.setState({[event.target.name]: event.target.value })
	}
	render() {
		return(
			<form className="resy-form">
				<input 
					type= 'text'
					name= 'name'
					placeholder= 'Name'
					value={this.state.name}
					onChange={(event) => this.handleChange(event)}
				/>
				<input 
					type= 'text'
					name= 'date'
					placeholder= 'Date (i.e. mm/dd)'
					value={this.state.date}
					onChange={(event) => this.handleChange(event)}
				/>
				<input 
					type= 'text'
					name= 'time'
					placeholder= 'Time (i.e. 1:00pm)'
					value={this.state.time}
					onChange={(event) => this.handleChange(event)}
				/>
				<input 
					type= 'text'
					name= 'number'
					placeholder= 'Number of Guests'
					value={this.state.number}
					onChange={(event) => this.handleChange(event)}
				/>
				<button>Add Reservation</button>
			</form>
		)
	}
}

export default Form 