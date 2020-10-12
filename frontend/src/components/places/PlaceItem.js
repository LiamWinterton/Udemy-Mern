import React, { useState } from 'react'

import Card from '../global/UIElements/Card'
import Button from '../global/FormElements/Button'
import Modal from '../global/UIElements/Modal'
import Map from '../global/UIElements/Map'

import "./PlaceItem.css"

const PlaceItem = props => {
	const [showMap, setShowMap] = useState(false)

	const openMapHandler = () => setShowMap(true)
	const closeMapHandler = () => setShowMap(false)

	return (
		<>
		<Modal
			show={showMap}
			onCancel={closeMapHandler}
			header={props.address}
			contentClass="place-item__modal-content"
			footerClass="place-item__modal-actions"
			footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
		>
			<div className="map-container">
				<Map src={props.embedSrc} title={props.address}></Map>
			</div>
		</Modal>
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
					<Button inverse onClick={openMapHandler} >View on Google Maps</Button>
					<Button to={`/places/${props.id}`}>Edit Place</Button>
					<Button danger>Delete Place</Button>
				</div>
			</Card>
		</li>
		</>
	)
}

export default PlaceItem
