import React from 'react'

import Input from "../../components/global/FormElements/Input"

import "./NewPlace.css"

const NewPlace = props => {
	return (
		<form className="place-form">
			<Input id="place-name" element="input" type="text" label="Place Name" placeholder="New York" />
		</form>
	)
}

export default NewPlace