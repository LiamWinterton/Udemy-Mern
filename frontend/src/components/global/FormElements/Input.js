import React, { useReducer } from "react"

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
	const [inputState, dispatch] = useReducer(inputReducer, { value: "", isValid: false, isTouched: false })

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

	const element = props.element === "input" ?
		(
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHandler}
				onBlur={blurHandler}
				value={inputState.value}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				onChange={changeHandler}
				onBlur={blurHandler}
				value={inputState.value}
			/>
		)

	const errorFeedback = !inputState.isValid && inputState.isTouched

	return (
		<div className={`form-control ${errorFeedback && "form-control--invalid"}`}>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
			{errorFeedback && <p>{props.errorText}</p>}
		</div>
	)
}

export default Input
