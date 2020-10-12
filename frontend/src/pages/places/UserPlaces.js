import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from "../../components/places/PlaceList"

const UserPlaces = props => {
	const dummyPlaces = [
		{
			id: "place1",
			title: "Empire State Building",
			description: "Big ass building",
			imageUrl: "https://www.tripsavvy.com/thmb/dbsEKjGUVeS2vQ86qu2NaE14zHg=/3865x2174/smart/filters:no_upscale()/empire-state-building-at-sunset-171080501-59f9d0c6d088c000102668bb.jpg",
			address: "20 W 34th St, New York, NY 10001, United States",
			location: {
				lat: 40.7484,
				lng: -73.9857
			},
			creatorID: "1",
			embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617356072744!2d-73.9878530842867!3d40.74844454332169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2suk!4v1602511315194!5m2!1sen!2suk"
		},
		{
			id: "place2",
			title: "Empire State Building 2",
			description: "Big ass building",
			imageUrl: "https://www.tripsavvy.com/thmb/dbsEKjGUVeS2vQ86qu2NaE14zHg=/3865x2174/smart/filters:no_upscale()/empire-state-building-at-sunset-171080501-59f9d0c6d088c000102668bb.jpg",
			address: "20 W 34th St, New York, NY 10001, United States",
			location: {
				lat: 40.7484,
				lng: -73.9857
			},
			creatorID: "2",
			embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617356072744!2d-73.9878530842867!3d40.74844454332169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2suk!4v1602511315194!5m2!1sen!2suk"
		}
	]

	const { userID } = useParams()
	const loadedPlaces = dummyPlaces.filter(place => place.creatorID === userID)
	
	return (
		<PlaceList items={loadedPlaces} />
	)
}

export default UserPlaces