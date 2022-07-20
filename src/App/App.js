import React, { Component } from 'react';
import './App.css';
import Reservations from '/Users/victoriafox-collis/turing/frontend/mod3/turing-cafe-ui/src/Reservations.js'
import Form from '/Users/victoriafox-collis/turing/frontend/mod3/turing-cafe-ui/src/Form.js'

class App extends Component {
  constructor() {
		super()
		this.state = {
			reservations: []
		}
	}

	componentDidMount = () => {
		fetch('http://localhost:3001/api/v1/reservations')
			.then(response => response.json())
			.then(reservations => this.setState({ reservations }))
	}
	
	render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
					<Form />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
