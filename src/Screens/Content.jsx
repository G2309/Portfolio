import '../Style/Content.css'
import {useState, useEffect} from 'react'
import Profile from './Profile'
import ProfileTer from './ProfileTer'
import Skills from './Skills'
import SkillsSec from './SkillsSec'
import Screen3 from './Screen3'
import Projects from './Projects'

const screens = [[<Profile/>,<ProfileTer/>],[<Skills/>,<ProfileTer/>], [<Screen3/>,<ProfileTer/>]]

const Content = () => {
	const [screen, setScreen] = useState(0)
	const [subscreen, setSubScreen] = useState(0)

	const [lactive, setLactive] = useState(false)
	const [ractive, setRactive] = useState(false)
	const [uactive, setUactive] = useState(false)
	const [dactive, setDactive] = useState(false)

	const handleNext = () => {
		setScreen((prev) => (prev + 1) % screens.length)
		setRactive(true)
		setSubScreen(0)
		setTimeout (() => setRactive(false),300)
	}

	const handlePrev = () => {
		setScreen((prev) => (prev - 1 + screens.length) % screens.length)
		setLactive(true)
		setSubScreen(0)
		setTimeout (() => setLactive(false),300)
	}

	const handleUp = () => {
		setSubScreen((prev) => (prev - 1 + screens[screen].length) % screens[screen].length)
		setUactive(true)
        	setTimeout(() => setUactive(false), 300)
	}

	const handleDown = () => {
		setSubScreen((prev) => (prev + 1) % screens[screen].length)
        	setDactive(true)
        	setTimeout(() => setDactive(false), 300)
	}

	const handleKey = (e) => {
		if (e.key === 'ArrowRight'){
			handleNext()
		} else if (e.key === 'ArrowLeft'){
			handlePrev()
		} else if (e.key === 'ArrowUp'){
			handleUp()
		} else if (e.key === 'ArrowDown'){
			handleDown()
		}
	}

	useEffect( () => {
		window.addEventListener('keydown', handleKey)
		return () => {
			window.removeEventListener('keydown',handleKey)
		}
	}, [])


	return (
		<div className='container'>
		<div className={`screen ${lactive ? 'active-left' : ''} ${ractive ? 'active-right' : ''} ${uactive ? 'active-up' : ''} ${dactive ? 'active-down' : ''}`}>
			{screens[screen][subscreen]}
		</div>
		<div className='nav'>
		 <button className={`nav-button ${lactive ? 'active' : ''}`} onClick={handlePrev}></button>
		 <button className={`nav-button ${uactive ? 'active' : ''}`} onClick={handleUp}></button>
		 <button className={`nav-button ${dactive ? 'active' : ''}`} onClick={handleDown}></button>
		 <button className={`nav-button ${ractive ? 'active' : ''}`} onClick={handleNext}></button>
		</div>
		</div>
	)
}

export default Content
