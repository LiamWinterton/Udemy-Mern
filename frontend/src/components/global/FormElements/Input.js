import React, { useReducer, useEffect } from "react"

import { validate } from "../../../util/validators"

import "./Input.css"

const inputReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.value,
				isValid: validate(action.value, action.validators)
			}
		case "BLUR":
			return {
				...state,
				isTouched: true
			}
		default:
			return state
	}
}

const Input = props => {
	// Manage State
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.value || "",
		isValid: false,
		isTouched: false
	})

	const { id, type, placeholder, rows, onInput } = props
	const { value, isValid, isTouched } = inputState

	// Dispatch our updated state when the input is changed
	// HINT: This is reacts hook version of redux (Not sure if people use that anymore)
	const changeHandler = event => {
		dispatch({
			type: "CHANGE",
			value: event.target.value,
			validators: props.validators
		})
	}

	const blurHandler = event => {
		dispatch({
			type: "BLUR"
		})
	}

	// If any of (id, value, isValid) change, run onInput to report back to form to manage whole form state
	useEffect(() => {
		onInput(id, value, isValid)
	}, [id, value, isValid, onInput])

	const element = props.element === "input" ?
		(
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				onChange={changeHandler}
				onBlur={blurHandler}
				value={value}
			/>
		) : (
			<textarea
				id={id}
				rows={rows || 3}
				onChange={changeHandler}
				onBlur={blurHandler}
				value={value}
			/>
		)

	const errorFeedback = !isValid && isTouched

	return (
		<div className={`form-control ${errorFeedback && "form-control--invalid"}`}>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
			{errorFeedback && <p>{props.errorText}</p>}
		</div>
	)
}

export default Input
