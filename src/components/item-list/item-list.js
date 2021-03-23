import React from 'react'
import './item-list.scss'

const ItemList = ({data, children, onItemSelected}) => {
	const items = data.map(({id,...item}) => {
		return (
			<li key={id}
					className="list-group-item"
					onClick={() => onItemSelected(id)}>
				{ children(item) }
			</li>)
	})
	return (
		<ul className="item-list list-group">
			{ items }
		</ul>)
}

export default ItemList
