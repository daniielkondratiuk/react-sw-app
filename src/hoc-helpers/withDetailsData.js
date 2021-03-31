import React, {useEffect, useState} from 'react'
import Loading from '../components/loading'

const withDetailsData = (View,getData,getImageUrl) => (props) => {
	const {itemId, onError,children} = props
	const [itemDetail, setItemDetail] = useState({})
	const [loading, setLoading] = useState(true)
	const [imgUrl, setImgUrl] = useState(null)

	useEffect(() => {
		if (!itemId) {
			return
		}
		getData(itemId)
			.then(item=>{
				setItemDetail(item)
				setImgUrl(getImageUrl(itemId))
				setLoading(false)
			}).catch(onError)
	}, [itemId,onError,getData])

	if (!itemId) {
		return <span>Select person from a list</span>
	}

	if (loading) {
		return <Loading/>
	}
	return <View children={children} itemDetail={itemDetail} imgUrl={imgUrl}/>
}

export default withDetailsData
