import React from 'react'
import Context from '../swapi-service-context'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from '../header'
import RandomPlanet from '../random-planet'
import {PersonPage,PlanetPage,StarshipPage} from '../pages'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../services/SwapiService'
import {Record} from '../item-details'
import {PersonDetails} from '../sw-components'

import './app.scss'


const App = () => {
	const onServiceChange = () => {
		console.log('service change')
	}
	return (
		<ErrorBoundry>
			<Context.Provider value={new SwapiService()}>
				<Router>
					<div className='container'>
						<Header onServiceChange={onServiceChange}/>
						<RandomPlanet updateInterval={25000}/>
						<Route path='/' exact render={()=><h2 className='text-center'>Welcome to StarDB</h2>}/>
						<Route path='/person' exact component={PersonPage}/>
						<Route path='/planets/:id?' component={PlanetPage}/>
						<Route path='/starships'  component={StarshipPage}/>
						<Route path='/person/:id'  render={({match})=>{
							const {id} = match.params
							return (
								<PersonDetails itemId={id}>
									<Record field='gender' label='Gender :'/>
									<Record field='birthYear' label='Birth Year :'/>
									<Record field='eyeColor' label='Eye Color :'/>
								</PersonDetails>
							)
						}}/>
					</div>
				</Router>
			</Context.Provider>
		</ErrorBoundry>)
}

export default App
