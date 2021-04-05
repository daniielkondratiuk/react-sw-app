import React, {useState} from 'react'
import Row from '../row'
import {Record} from '../item-details'
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
				<PersonDetails itemId={selectedItem}>
					<Record field='gender' label='Gender :'/>
					<Record field='birthYear' label='Birth Year :'/>
					<Record field='eyeColor' label='Eye Color :'/>
				</PersonDetails>
			</ErrorBoundry>
		</Row>
	)
}

export default PersonPage
