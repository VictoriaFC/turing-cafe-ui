import React, { Component } from 'react';
import './App.css';
import Reservations from '/Users/victoriafox-collis/turing/frontend/mod3/turing-cafe-ui/src/Reservations.js'

class App extends Component {
  constructor() {
		super()
		this.state = {
			reservations: [
				{
					"id": 1,
					"name": "Christie",
					"date": "12/29",
					"time": "7:00",
					"number": 12
			},
			{
					"id": 2,
					"name": "Leta",
					"date": "4/5",
					"time": "7:00",
					"number": 2
			}
			]
		}
	}

	// componentDidMount = () => {
	// 	fetch('http://localhost:3001/api/v1/reservations')
	// 		.then(response => response.json())
	// 		.then(reservations => this.setState({ reservations }))
	// }
	
	render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
