import React from 'react'
import {withData} from '../../hoc-helpers'
import ItemList from '../item-list'
import SwapiService from '../../services/SwapiService'
// import DummySwapiService from '../../services/DummySwapiService'

const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService()
// const {getAllPeople, getAllPlanets, getAllStarships} = new DummySwapiService()

const withChildFunction = (Wrapper, renderFn) => (props) => {
	return (
		<Wrapper {...props}>
			{renderFn}
		</Wrapper>
	)
}

const renderPerson = ({name, gender, birthYear}) => <>{name} ({gender} {birthYear})</>
const renderPlanet = ({name, diameter}) => <>{name} (diameter: {diameter}km)</>
const renderStarship = ({name,crew,passengers}) => <>{name} ( Crew: {crew}, Passengers: {passengers})</>

const PersonList =  withData(withChildFunction(ItemList, renderPerson),
														 getAllPeople)
const PlanetList = withData(withChildFunction(ItemList, renderPlanet),
														getAllPlanets)
const StarshipList = withData(withChildFunction(ItemList, renderStarship),
															getAllStarships)

export {PersonList, PlanetList, StarshipList}
