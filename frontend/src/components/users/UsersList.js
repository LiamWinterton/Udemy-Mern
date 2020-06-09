import React from "react"

import UsersListItem from './UsersListItem'
import Card from '../global/UIElements/Card'

import "./UsersList.css"

const UsersList = props => {
	if (!props.users || props.users.length === 0) {
		return (
			<Card>
				<h2>No Users Found.</h2>
			</Card>
		)
	} else {
		return (
			<ul className="users-list">
				{props.users.map(user => {
					return (
						<UsersListItem
							key={user.id}
							id={user.id}
							image={user.image}
							name={user.name}
							placeCount={user.places}
						/>
					)
				})}
			</ul>
		)
	}
}

export default UsersList
