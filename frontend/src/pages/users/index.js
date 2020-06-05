import React from "react"

import UsersList from "../../components/users/UsersList"

const Users = () => {
	const USERS = [
		{
			id: 1,
			name: "Liam",
			image: "https://www.gamasutra.com/db_area/images/news/2018/Jun/320213/supermario64thumb1.jpg",
			places: 3,
		},
	]

	return <UsersList users={USERS} />
}

export default Users
