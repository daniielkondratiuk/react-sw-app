import React from 'react'
import PropTypes from 'prop-types'

const Row = ({children}) => {
	return (
		<div className="row mb-2">
			{React.Children.map(children, child => {
				return (<div className="col-md-6">
									{child}
								</div>)
			})}
		</div>)
}

Row.propTypes = {
	left: PropTypes.node,
	right: PropTypes.node
}

export default Row
