import React, {useState} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import PersonPage from '../person-page'

import './app.scss'

const App = () => {
	const [showRandomPlanet, setShowRandomPlanet] = useState(true)
	return (
		<div className='container'>
			<Header/>
			<button
				className="toggle-planet btn btn-light btn my-2"
				onClick={()=>setShowRandomPlanet(!showRandomPlanet)}
			>
				Toggle Random Planet
			</button>
			{showRandomPlanet ? <RandomPlanet/> : null}
			<PersonPage/>
		</div>)
}

export default App
