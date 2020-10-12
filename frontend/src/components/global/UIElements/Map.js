import React from 'react'

import "./Map.css"

const Map = props => {
	return (
		<div id="map">
			<iframe
				src={props.src}
				frameBorder="0"
				title={props.title}
				style={{border: 0}}
				allowFullScreen=""
				aria-hidden="false"
				tabIndex="0">
			</iframe>
		</div>
	)
}

export default Map