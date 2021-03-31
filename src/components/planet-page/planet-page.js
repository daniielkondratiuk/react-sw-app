import React, {useState} from 'react'
import Row from '../row'
import {PlanetDetails, PlanetList} from '../sw-components'
import ErrorBoundry from '../error-boundry'
import {Record} from '../item-details'


const PlanetPage = () => {
	const [selectedItem, setSelectedItem] = useState(null)
	const onItemSelected = (id) => setSelectedItem(id)

	return (
		<Row>
			<ErrorBoundry>
				<PlanetList onItemSelected={onItemSelected}/>
			</ErrorBoundry>
			<ErrorBoundry>
				<PlanetDetails itemId={selectedItem}>
					<Record field='population' label='Population :'/>
					<Record field='diameter' label='Diameter :'/>
					<Record field='rotationPeriod' label='Rotation Period :'/>
				</PlanetDetails>
			</ErrorBoundry>
		</Row>
	)
}

export default PlanetPage
