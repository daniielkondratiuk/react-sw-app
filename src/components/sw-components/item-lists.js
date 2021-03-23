import React from 'react'
import {withData} from '../../hoc-helpers'
import ItemList from '../item-list'
import SwapiService from '../../services/SwapiService'

const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService()

const withChildFunction = (Wrapper, renderFn) => (props) => {
	return (
		<Wrapper {...props}>
			{renderFn}
		</Wrapper>
	)
}

const renderPerson = ({name, gender, birthYear}) => <>{name} ({gender} {birthYear})</>
const renderPlanet = ({name, diameter}) => <>{name} (diameter: {diameter}km)</>

const PersonList =  withData(withChildFunction(ItemList, renderPerson),
														 getAllPeople)
const PlanetList = withData(withChildFunction(ItemList, renderPlanet),
														getAllPlanets)
const StarshipList = withData(withChildFunction(ItemList, renderPerson),
															getAllStarships)

export {PersonList, PlanetList, StarshipList}
