import React, {useState} from 'react'
import Row from '../row'
import {PersonDetails, PersonList} from '../sw-components'
import ErrorBoundry from '../error-boundry'

const PersonPage = () => {
	const [selectedItem, setSelectedItem] = useState(null)
	const onItemSelected = (id) => setSelectedItem(id)

	return (
		<Row>
			<ErrorBoundry>
				<PersonList onItemSelected={onItemSelected}/>
			</ErrorBoundry>
			<ErrorBoundry>
				<PersonDetails itemId={selectedItem}/>
			</ErrorBoundry>
		</Row>
	)
}

export default PersonPage
