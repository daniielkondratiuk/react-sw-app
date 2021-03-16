import React, {useState, useEffect} from 'react'
import SwapiService from '../../services/SwapiService'
import Loading from '../loading'

import './item-list.scss'


const ItemList = ({onPersonSelected}) => {
	const [persons, setPersons] = useState([])

	useEffect(() => {
		const swapi = new SwapiService()
		swapi.getAllPeople().then(setPersons)
	},[])
	const personsList = persons.map(({id,name}) => {
		return (
			<li
				key={id}
				className="list-group-item"
				onClick={()=>onPersonSelected(id)}
			>
				{name}
			</li>)
	})

	return (
		<ul className="item-list list-group">
			{!personsList.length ? <Loading/> : personsList }
		</ul>)
}
export default ItemList
