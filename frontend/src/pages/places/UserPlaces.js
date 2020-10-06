import React from 'react'

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
			creatorID: "creator1"
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
			creatorID: "creator2"
		}
	]
	
	return (
		<PlaceList items={dummyPlaces} />
	)
}

export default UserPlaces