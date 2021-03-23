import React from 'react'
import ItemDetails, {Record} from '../item-details'
import SwapiService from '../../services/SwapiService'

const {
	getPerson, getPlanet, // getStarship,
	getPersonImage, getPlanetImage, // getStarshipImage
} = new SwapiService()

const PersonDetails = ({itemId, onError}) => {
	return (
		<ItemDetails
			itemId={itemId}
			getData={getPerson}
			getImageUrl={getPersonImage}
			onError={onError}>
			<Record field='gender' label='Gender :'/>
			<Record field='birthYear' label='Birth Year :'/>
			<Record field='eyeColor' label='Eye Color :'/>
		</ItemDetails>
	)
}
const PlanetDetails = ({itemId}) => {
	return (
		<ItemDetails
			itemId={itemId}
			getData={getPlanet}
			getImageUrl={getPlanetImage}>
			<Record field='population' label='Population :'/>
			<Record field='diameter' label='Diameter :'/>
			<Record field='rotationPeriod' label='Rotation Period :'/>
		</ItemDetails>
	)
}
const StarshipDetails = () => {

}

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
}
