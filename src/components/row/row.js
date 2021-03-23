import React from 'react'

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

export default Row
