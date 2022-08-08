import React from 'react'
import './ResyCard.css'

const ResyCard = ({id, name, date, time, number}) => {
	return(
		<div className='resy-card'>
			<h3>{name}</h3>
			<p>{date}</p>
			<p>{time}</p>
			<p>{number}</p>
			<button>submit</button>
		</div>
	)
}

export default ResyCard