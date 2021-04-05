import ItemDetails from '../item-details'
import {withDetailsData} from '../../hoc-helpers'
import SwapiService from '../../services/SwapiService'
// import DummySwapiService from '../../services/DummySwapiService'

const {getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage} = new SwapiService()
// const {getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage} = new DummySwapiService()

const PersonDetails = withDetailsData(ItemDetails, getPerson, getPersonImage)
const PlanetDetails = withDetailsData(ItemDetails, getPlanet, getPlanetImage)
const StarshipDetails = withDetailsData(ItemDetails, getStarship, getStarshipImage)

export {PersonDetails, PlanetDetails, StarshipDetails}
