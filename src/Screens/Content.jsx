import '../Style/Content.css'
import {useState} from 'react'
import Profile from './Profile'
import Skills from './Skills'
import Screen3 from './Screen3'

const screens = [<Profile/>,<Skills/>, <Screen3/>]

const Content = () => {
	const [screen, setScreen] = useState(0)

	const handleNext = () => {
		setScreen((prev) => (prev + 1) % screens.length)
	}

	const handlePrev = () => {
		setScreen((prev) => (prev - 1 + screens.length) % screens.length)
	}


	return (
		<div className='container'>
		<div className='screen'>
			{screens[screen]}
		</div>
		 <button className='nav-button' onClick={handlePrev}>←</button>
		 <button className='nav-button' onClick={handleNext}>→</button>
		</div>
	)
}

export default Content
