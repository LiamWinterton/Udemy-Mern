import React from 'react'
import { useParams } from 'react-router-dom'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators"

import { useForm } from "../../components/global/Hooks/form-hook"

import Button from "../../components/global/FormElements/Button"
import Input from "../../components/global/FormElements/Input"

import "./PlaceForm.css"

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

const EditPlace = props => {
	const placeID = useParams().placeID
	const filteredPlace = dummyPlaces.find(p => p.id === placeID)

	const [formState, inputHandler] = useForm({
		name: {
			value: filteredPlace.name,
			isValid: true
		},
		address: {
			value: filteredPlace.address,
			isValid: true
		},
		description: {
			value: filteredPlace.description,
			isValid: true
		}
	}, true)

	console.log(inputHandler)
	console.log(typeof inputHandler)

	if(!filteredPlace) {
		return (
			<div className="center">
				<h2>Could not find any places</h2>
			</div>
		)
	}

	return (
		<form className="place-form">
			<Input
				id="name"
				element="input"
				type="text"
				label="Place Name"
				placeholder="New York"
				errorText="Please enter a valid name"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
				onInput={inputHandler}
				value={formState.inputs.name.value}
				valid={formState.inputs.name.isValid}
			/>
			<Input
				id="address"
				element="input"
				type="text"
				label="Address"
				placeholder="20 W 34th St, New York, NY 10001, United States"
				errorText="Please enter a valid address"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
				onInput={inputHandler}
				value={formState.inputs.address.value}
				valid={formState.inputs.address.isValid}
			/>
			<Input
				id="description"
				element="textarea"
				rows={5}
				label="Description"
				placeholder="The Big Apple"
				errorText="Descriptions must be atleast 10 characters long"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
				value={formState.inputs.description.value}
				onInput={formState.inputs.description.isValid}
			/>
			<Button type="submit" disabled={!formState.isValid}>Update place</Button>
		</form>
	)
}

export default EditPlace