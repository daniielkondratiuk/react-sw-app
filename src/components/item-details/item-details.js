import React from 'react'

import './item-details.scss'

const ItemDetails = ({itemDetail, imgUrl, children}) => {
	const {name} = itemDetail
	return (
		<div className="item-details">
			<img className="item-image" src={imgUrl} alt={name}/>
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{React.Children.map(children, child => React.cloneElement(child, {itemDetail}))}
				</ul>
			</div>
		</div>)
}

const Record = ({itemDetail, field, label}) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{itemDetail[field]}</span>
		</li>
	)
}

export default ItemDetails
export {Record}
