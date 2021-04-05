import React, {useState, useEffect} from 'react'
import SwapiService from '../../services/SwapiService'
import PropTypes from 'prop-types'
import Loading from '../loading'

import './random-planet.scss'

const RandomPlanet = ({updateInterval}) => {
	const [randomPlanet, setRandomPlanet] = useState(null)
	const [error, setError] = useState(false)
	function fetchPlanet() {
		const swapi = new SwapiService()
		const id = Math.ceil(Math.random() * 20)
		swapi.getPlanet(id)
				 .then(planet => setRandomPlanet(planet))
				 .catch(() => setError(true))
	}

	useEffect(() => {
		fetchPlanet()
		const interval = setInterval(fetchPlanet, updateInterval)
		return () => clearInterval(interval)
	}, [updateInterval])

	const content = randomPlanet ? <ViewPlanet randomPlanet={randomPlanet}/> : null
	const spiner = !randomPlanet && !error ? <Loading/> : null
	const err = error ? <h1 className='mx-auto'>Ooops</h1> : null
	return (
		<div className="random-planet jumbotron rounded">
			{content}
			{spiner}
			{err}
		</div>)

}

RandomPlanet.defaultProps = {
	updateInterval : 25000
}
RandomPlanet.propTypes = {
	updateInterval : PropTypes.number
}

const ViewPlanet = ({randomPlanet}) => {
	const {id, name, population, rotationPeriod, diameter} = randomPlanet
	return (
		<>
			<img className="planet-image"
					 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}/>
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</>)
}

export default RandomPlanet
