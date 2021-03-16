import React, {useEffect, useState} from 'react'
import SwapiService from '../../services/SwapiService'

import './person-details.scss'
import Loading from '../loading'

const PersonDetails = ({personId, onError}) => {
	const [personDetail, setPersonDetail] = useState({})
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		if (!personId) {
			return
		}
		setLoading(true)
		const swapi = new SwapiService()
		swapi.getPerson(personId)
				 .then(person=>{
						setPersonDetail(person)
						setLoading(false)
				 }).catch(onError)
	}, [personId,onError])

	if (!personId) {
		return <span>Select person from a list</span>
	}


	const content = !loading ? <ViewPersonDetail personDetail={personDetail}/> : null
	const spinner = loading ? <Loading/> : null

	return (
		<div className="person-details card">
			{content}
			{spinner}
		</div>)
}

const ViewPersonDetail = ({personDetail}) => {
	const {id, name, gender, birthYear, eyeColor} = personDetail
	return (
		<>
			<img className="person-image"
					 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name}/>
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Birth Year</span>
						<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Eye Color</span>
						<span>{eyeColor}</span>
					</li>
				</ul>
			</div>
		</>)
}

export default PersonDetails
