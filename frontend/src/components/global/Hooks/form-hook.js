import React, { useCallback, useReducer } from 'react'

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

export const useForm = (inputs, isValid) => {
	const [formState, dispatch] =  useReducer(formReducer, {
		inputs: inputs,
		isValid: isValid
	})

	// We use "useCallback" here because this function is defined IN the component.
	// On a rerender, the function re-create, and loops would occur as its a "useEffect" dependency
	// Update form state on input change
	const inputHandler = useCallback((id, value, isValid) => {
		dispatch({
			type: "INPUT_CHANGE",
			value,
			isValid,
			id
		})
	}, [dispatch])

	return [formState, inputHandler]
}