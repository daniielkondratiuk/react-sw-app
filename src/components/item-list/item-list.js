import React, {useState, useEffect} from 'react'
import SwapiService from '../../services/SwapiService'
import Loading from '../loading'

import './item-list.scss'


const ItemList = ({onPersonSelected, onError}) => {
	const [items, setItems] = useState([])

	useEffect(() => {
		const swapi = new SwapiService()
		swapi.getAllPeople().then(setItems).catch(onError)
	}, [items, onError])

	const itemsList = items.map(({id, name}) => <li key={id}
																									className="list-group-item"
																									onClick={() => onPersonSelected(id)}>{name}</li>)

	return (
		<ul className="item-list list-group">
			{!itemsList.length ? <Loading/> : itemsList}
		</ul>)
}
export default ItemList
