import '../Style/Profile.css';

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
		  <div className='foto-cont'></div>
		 </div>
		</div>
	)
}

export default Profile
