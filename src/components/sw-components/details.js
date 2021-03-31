import ItemDetails from '../item-details'
import SwapiService from '../../services/SwapiService'
import {withDetailsData} from '../../hoc-helpers'

const {getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage} = new SwapiService()

const PersonDetails = withDetailsData(ItemDetails, getPerson, getPersonImage)
const PlanetDetails = withDetailsData(ItemDetails, getPlanet, getPlanetImage)
const StarshipDetails = withDetailsData(ItemDetails, getStarship, getStarshipImage)

export {PersonDetails, PlanetDetails, StarshipDetails}
