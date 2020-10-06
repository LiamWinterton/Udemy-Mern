import React from 'react'

import PlaceItem from "./PlaceItem"

import "./PlaceList.css"

const PlaceList = props => {
	// Fail condition
	if(props.items.length === 0) {
		return (
			<div className="place-list center">
				<h2>No places found. Maybe, create one?</h2>
				<button>Share a place</button>
			</div>
		)
	}

	return (
		<ul className="place-list">
			{props.items.map(item => {
				return (
					<PlaceItem
						key={item.id}
						id={item.id}
						imageUrl={item.imageUrl}
						title={item.title}
						description={item.description}
						address={item.address}
						creatorID={item.creatorID}
						coordinates={item.location}
					/>
				)
			})}
		</ul>
	)
}

export default PlaceList
