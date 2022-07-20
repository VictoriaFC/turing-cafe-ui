import React from 'react'
import '/Users/victoriafox-collis/turing/frontend/mod3/turing-cafe-ui/src/ResyCard.css'

const ResyCard = ({name, date, time, number, id, key}) => {
	return(
		<div className='resy-card'>
			<h3>{name}</h3>
			<p>{date}</p>
			<p>{time}</p>
			<p>{number}</p>
			<button>cancel</button>
		</div>
	)
}

export default ResyCard