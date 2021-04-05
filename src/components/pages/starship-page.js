import React, {useState} from 'react'
import Row from '../row'
import {StarshipDetails, StarshipList} from '../sw-components'
import ErrorBoundry from '../error-boundry'
import {Record} from '../item-details'

const StarshipPage = () => {
	const [selectedItem, setSelectedItem] = useState(null)
	const onItemSelected = (id) => setSelectedItem(id)

	return (
		<Row>
			<ErrorBoundry>
				<StarshipList onItemSelected={onItemSelected}/>
			</ErrorBoundry>
			<ErrorBoundry>
				<StarshipDetails itemId={selectedItem}>
					<Record field='model' label='Model :'/>
					<Record field='length' label='Length :'/>
					<Record field='manufacturer' label='Manufacturer :'/>
				</StarshipDetails>
			</ErrorBoundry>
		</Row>
	)
}

export default StarshipPage
