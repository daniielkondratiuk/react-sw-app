import React, {useState} from 'react'
import ItemList from '../item-list'
import PersonDetails from '../person-details'

const PersonPage = () => {
	const [selectedPerson, setSelectedPerson] = useState(null)
	const onPersonSelected = (id) => setSelectedPerson(id)
	const [isError, setIsError] = useState(false)

	const onError = () => {
		setIsError(true)
	}

	if (isError){
		return <h1 className='text-center'>Ops, something wrong</h1>
	}

	return (
		<div className="row mb2">
			<div className="col-md-6">
				<ItemList onPersonSelected={onPersonSelected} onError={onError}/>
			</div>
			<div className="col-md-6">
				<PersonDetails personId={selectedPerson} onError={onError}/>
			</div>
		</div>)
}

export default PersonPage
