import React from "react"

import Input from "../../components/global/FormElements/Input"

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators"

import "./NewPlace.css"

const NewPlace = props => {
	return (
		<form className="place-form">
			<Input
				id="place-name"
				element="input"
				type="text"
				label="Place Name"
				placeholder="New York"
				errorText="Please enter a valid name"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
			/>
		</form>
	)
}

export default NewPlace
