import React, {useState,useEffect} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'

import './app.scss'
import SwapiService from '../../services/SwapiService'

const App = () => {
	const [selectedPerson, setSelectedPerson] = useState(null)
	const [personDetail, setPersonDetail] = useState({})

	const onPersonSelected = (id) => setSelectedPerson(id)

	useEffect(() => {
		if (selectedPerson) {
			const swapi = new SwapiService()
			swapi.getPerson(selectedPerson).then(setPersonDetail)
		}
	}, [selectedPerson])

	return (
	  <div className='container'>
			<Header/>
			<RandomPlanet/>

			<div className="row mb2">
				<div className="col-md-6">
					<ItemList onPersonSelected={onPersonSelected}/>
				</div>
				<div className="col-md-6">
					{selectedPerson ? <PersonDetails personDetail={personDetail}/> : null}
				</div>
			</div>
		</div>)
}

export default App
