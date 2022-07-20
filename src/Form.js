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

	render() {
		return(
			<form>
				<input 
					type='text'
					placeholder='Name'
					name='name'
					value={this.state.name}
				
				/>
				<input 
					type='text'
					placeholder='Date'
					name='date'
					value={this.state.date}
				
				/>

				<input 
					type='text'
					placeholder='Time'
					name='time'
					value={this.state.time}
				
				/>

				<input 
					type='text'
					placeholder='Number of Guests'
					name='number'
					value={this.state.number}
				
				/>
				<button>Submit</button>
			</form>
		)
	}
}

export default Form 