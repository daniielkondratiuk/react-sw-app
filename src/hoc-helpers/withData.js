import React, {useEffect, useState} from 'react'
import Loading from '../components/loading'

const withData = (View, getData) => (props) => {
	const {onItemSelected, onError} = props
	const [data, setData] = useState([])

	useEffect(() => {
		getData().then(setData).catch(onError)
	}, [onItemSelected, onError])

	if (!data.length) {
		return <Loading/>
	}
	return <View {...props} data={data}/>
}

export default withData
