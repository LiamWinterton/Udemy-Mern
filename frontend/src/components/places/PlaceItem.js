import React from 'react'

import "../global/UIElements/Card"
import Card from '../global/UIElements/Card'

import "./PlaceItem.css"

const PlaceItem = props => {
	return (
		
		<li className="place-item">
			<Card className="place-item__content">
				<div className="place-item__image">
					<img src={props.imageUrl} title={props.title} alt={props.title} />
				</div>
				<div className="place-item__info">
					<h2>{props.title}</h2>
					<h3>{props.address}</h3>
					<p>{props.description}</p>
				</div>
				<div className="place-item__actions">
					<button>View on Google Maps</button>
					<button>Edit Place</button>
					<button>Delete Place</button>
				</div>
			</Card>
		</li>
	)
}

export default PlaceItem
