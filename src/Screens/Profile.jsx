import '../Style/Profile.css';
import foto from './foto.png'
import { Typewriter, Cursor } from 'react-simple-typewriter'

const Profile = () => {
	return(
		<div className='profile'>
		 <div className='blobs'>
		  <div className='circle d1' style={{animationDelay:'-2s'}}></div>
		  <div className='circle d2' style={{animationDelay: '-4s'}}></div>
		  <div className='circle d3' style={{animationDelay: '-6s'}}></div>
		  <div className='circle d4' style={{animationDelay: '-8s'}}></div>
		  <div className='circle d1' style={{animationDelay:'-10s'}}></div>
		  <div className='circle d2' style={{animationDelay: '-14s'}}></div>
		  <div className='circle d3' style={{animationDelay: '-16s'}}></div>
		  <div className='circle d4' style={{animationDelay: '-18s'}}></div>
		 </div>
		 <div className='card'>
		  <div className='foto-cont'>
		    <img src={foto}/>
		  </div>
		  <div className='info'>
		    <h1 className='name'>
		    <Typewriter 
		        words={['Gustavo Cruz']}
		        loop={1}
			typeSpeed={55}
			delaySpeed={5000}
		    />
		    </h1>
		    <h2 className='title'>
		    <Typewriter 
		        words={['Estudiante de Ciencias de la Computación y Tecnologías de la Información']}
		        loop={1}
			typeSpeed={55}
			cursor
			cursorStyle={'_'}
			delaySpeed={7000}
		    />
		    </h2>
		    <p className='description'>
		    <Typewriter 
		        words={['Soy Gustavo Cruz, un estudiante de CC y TI. Mi objetivo es dominar el campo de la programación y ampliar continuamente mis conocimientos en este mundo de la tecnología.']}
		        loop={1}
			typeSpeed={55}
			cursor
			cursorStyle={'_'}
			delaySpeed={7000}
		    />
		    </p>
		  </div>
		 </div>
		</div>
	)
}

export default Profile
