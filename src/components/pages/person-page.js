import React from 'react'
import {withRouter} from 'react-router-dom'
import {PersonList} from '../sw-components'
import ErrorBoundry from '../error-boundry'

const PersonPage = ({history}) => {
	return (
		<ErrorBoundry>
			<PersonList
				onItemSelected={(id)=>history.push(id)}/>
		</ErrorBoundry>
	)
}


export default withRouter(PersonPage)
