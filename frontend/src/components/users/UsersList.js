import React from "react"

import UsersListItem from './UsersListItem'

import "./UsersList.css"

const UsersList = props => {
	if (!props.users || props.users.length === 0) {
		return (
			<div className="center">
				<h2>No Users Found.</h2>
			</div>
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
