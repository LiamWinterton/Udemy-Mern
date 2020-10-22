import React, { useCallback, useReducer } from "react"

import Input from "../../components/global/FormElements/Input"
import Button from "../../components/global/FormElements/Button"

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators"

import "./PlaceForm.css"

const formReducer = (state, action) => {
	switch(action.type) {
		case "INPUT_CHANGE":
			let formIsValid = true

			for(const inputID in state.inputs) {
				if(inputID === action.id) {
					formIsValid = formIsValid && action.isValid
				} else {
					formIsValid = formIsValid && state.inputs[inputID].isValid
				}
			}
		
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.id]: {
						value: action.value,
						isValid: action.isValid
					}
				},
				isValid: formIsValid
			}
		default:
			return { ...state }
	}
}

const NewPlace = props => {
	const [formState, dispatch] =  useReducer(formReducer, {
		inputs: {
			"place-name": {
				value: '',
				isValid: false
			},
			"place-description": {
				value: '',
				isValid: false
			},
			"place-address": {
				value: '',
				isValid: false
			}
		},
		isValid: false
	})

	// We use "useCallback" here because this function is defined IN the component.
	// On a rerender, the function re-create, and loops would occur as its a "useEffect" dependency
	// Update form state on input change
	const inputHandler = useCallback((id, value, isValid) => {
		dispatch({
			type: "INPUT_CHANGE", value, isValid, id
		})
	}, [dispatch])

	const submitHandler = event => {
		event.preventDefault()

		console.log(formState.inputs)
	}

	return (
		<form className="place-form" onSubmit={submitHandler}>
			<Input
				id="place-name"
				element="input"
				type="text"
				label="Place Name"
				placeholder="New York"
				errorText="Please enter a valid name"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
				onInput={inputHandler}
			/>
			<Input
				id="place-address"
				element="input"
				type="text"
				label="Address"
				placeholder="20 W 34th St, New York, NY 10001, United States"
				errorText="Please enter a valid address"
				validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
				onInput={inputHandler}
			/>
			<Input
				id="place-description"
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
