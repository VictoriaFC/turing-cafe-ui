import React from 'react'
import './Reservations.css'
import ResyCard from '../ResyCard/ResyCard'

const Reservations = ({reservations}) => {
	const resyCards = reservations.map(reservation => {
		return(
			<ResyCard 
				id={reservation.id}
				key={reservation.id}
				name={reservation.name}
				date={reservation.date}
				time={reservation.time}
				number={reservation.number}
			/>
		)
	})
	return (
		<div className="reservations-container">
			{resyCards}
		</div>
	)
}

export default Reservations