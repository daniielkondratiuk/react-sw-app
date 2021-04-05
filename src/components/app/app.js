import React from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import {PersonPage,PlanetPage,StarshipPage} from '../pages'
import ErrorBoundry from '../error-boundry'
import Context from '../swapi-service-context'
import SwapiService from '../../services/SwapiService'

import './app.scss'

const App = () => {
	const onServiceChange = () => {
		console.log('service change')
	}
	return (
		<ErrorBoundry>
			<Context.Provider value={new SwapiService()}>
				<div className='container'>
					<Header onServiceChange={onServiceChange}/>
					<RandomPlanet updateInterval={25000}/>
					<PersonPage/>
					<PlanetPage/>
					<StarshipPage/>
				</div>
			</Context.Provider>
		</ErrorBoundry>)
}

export default App
