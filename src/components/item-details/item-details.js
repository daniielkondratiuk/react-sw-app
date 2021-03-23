import React, {useEffect, useState} from 'react'
import Loading from '../loading'

import './item-details.scss'


const Record = ({itemDetail, field, label}) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{itemDetail[field]}</span>
		</li>
	)
}

const ItemDetails = ({itemId, onError, getData, getImageUrl, children}) => {
	const [itemDetail, setItemDetail] = useState({})
	const [loading, setLoading] = useState(true)
	const [imgUrl, setImgUrl] = useState(null)
	useEffect(() => {
		if (!itemId) {
			return
		}
		setLoading(true)
		getData(itemId)
				 .then(item=>{
						setItemDetail(item)
					 	setImgUrl(getImageUrl(itemId))
						setLoading(false)
				 }).catch(onError)
	}, [itemId,onError,getData,getImageUrl,children])

	if (!itemId) {
		return <span>Select person from a list</span>
	}


	const content = !loading ? <ViewItemDetail itemDetail={itemDetail} imgUrl={imgUrl} children={children}/> : null
	const spinner = loading ? <Loading/> : null

	return (
		<div className="person-details card">
			{content}
			{spinner}
		</div>)
}

const ViewItemDetail = ({itemDetail, imgUrl, children}) => {
	const {name} = itemDetail
	return (
		<>
			<img className="person-image"
					 src={imgUrl} alt={name}/>
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{React.Children.map(children, child => React.cloneElement(child, {itemDetail}))}
				</ul>
			</div>
		</>)
}

export default ItemDetails
export {Record}
