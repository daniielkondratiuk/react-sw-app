import React from 'react'
import {withRouter} from 'react-router-dom'
import Row from '../row'
import {PlanetDetails, PlanetList} from '../sw-components'
import ErrorBoundry from '../error-boundry'
import {Record} from '../item-details'


const PlanetPage = ({history, match}) => {
	const {id} = match.params
	return (
		<Row>
			<ErrorBoundry>
				{/*<PlanetList onItemSelected={(id)=>history.push(id)}/>*/}
				<PlanetList onItemSelected={history.push}/>
			</ErrorBoundry>
			<ErrorBoundry>
				<PlanetDetails itemId={id}>
					<Record field='population' label='Population :'/>
					<Record field='diameter' label='Diameter :'/>
					<Record field='rotationPeriod' label='Rotation Period :'/>
				</PlanetDetails>
			</ErrorBoundry>
		</Row>
	)
}

export default withRouter(PlanetPage)
