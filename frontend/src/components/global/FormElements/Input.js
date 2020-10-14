import React, { useReducer } from "react"

import "./Input.css"

const inputReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			return {
				...state,
				value: action.value,
				isValid: true,
			}
		default:
			return state
	}
}

const Input = props => {
	// Manage State
	const [inputState, dispatch] = useReducer(inputReducer, { value: "", isValid: false })

	// Dispatch our updated state when the input is changed
	// HINT: This is reacts hook version of redux (Not sure if people use that anymore)
	const changeHandler = event => {
		dispatch({
			type: "CHANGE",
			value: event.target.value
		})
	}

	const element =
		props.element === "input" ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHandler}
				value={inputState.value}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				onChange={changeHandler}
				value={inputState.value}
			/>
		)

	return (
		<div className={`form-control ${!inputState.isValid && "form-control--invalid"}`}>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
			{!inputState.isValid && <p>{props.errorText}</p>}
		</div>
	)
}

export default Input
