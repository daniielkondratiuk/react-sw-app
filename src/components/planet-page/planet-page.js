import React, {useState} from 'react'
import Row from '../row'
import {PlanetDetails, PlanetList} from '../sw-components'


const PlanetPage = () => {
	const [selectedItem, setSelectedItem] = useState(null)
	const [isError, setIsError] = useState(false)


	const onItemSelected = (id) => setSelectedItem(id)

	const onError = () => {
		setIsError(true)
	}

	if (isError){
		return <h1 className='text-center'>Ops, something wrong</h1>
	}



	return (
		<Row>
			<PlanetList onItemSelected={onItemSelected} onError={onError}/>
			<PlanetDetails itemId={selectedItem}/>
		</Row>
	)
}

export default PlanetPage
