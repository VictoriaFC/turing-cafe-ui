import React from 'react'
import './Reservations.css'
import ResyCard from '/Users/victoriafox-collis/turing/frontend/mod3/turing-cafe-ui/src/ResyCard.js'

const Reservations = ({ reservations }) => {

	const resyCards = reservations.map(reservation => {
		return (
			<ResyCard 
				name={reservation.name}
				date={reservation.date}
				time={reservation.time}
				number={reservation.number}
				id={reservation.id}
				key={reservation.id}
			/>
		)
	})
	return(
		<div className='reservations-container'>
			{resyCards}
		</div>
	)
}

export default Reservations