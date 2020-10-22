import React from "react"

// Hooks
import { useForm } from "../../components/global/Hooks/form-hook"

import Input from "../../components/global/FormElements/Input"
import Button from "../../components/global/FormElements/Button"

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators"

import "./PlaceForm.css"

const NewPlace = props => {
	const [formState, inputHandler] = useForm({
		name: {
			value: "",
			isValid: false
		},
		address: {
			value: "",
			isValid: false
		},
		description: {
			value: "",
			isValid: false
		}
	}, false)

	const submitHandler = event => {
		event.preventDefault()

		console.log(formState.inputs)
	}

	return (
		<form className="place-form" onSubmit={submitHandler}>
			<Input
				id="name"
				element="input"
				type="text"
				label="Place Name"
				placeholder="New York"
				errorText="Please enter a valid name"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
				onInput={inputHandler}
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
			/>
			<Input
				id="description"
				element="textarea"
				rows={5}
				label="Description"
				placeholder="The Big Apple"
				errorText="Descriptions must be atleast 10 characters long"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
				onInput={inputHandler}
			/>
			<Button type="submit" disabled={!formState.isValid}>Add place</Button>
		</form>
	)
}

export default NewPlace
