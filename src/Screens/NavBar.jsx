import '../Style/NavBar.css'

const NavBar = () => {
	return (
		<div className='navbar'>
      	 	 <div className='nav-box'>
          	  <div className='nav-item'>
            	   <a href="https://github.com/G2309" data-label='Github'></a>
          	  </div>
        	 </div>
      		 <div className='nav-box'>
        	  <div className='nav-item'>
          	   <a href="" data-label='+502 5571-4631'></a>
        	  </div>
      	 	 </div>
      		 <div className='nav-box'>
        	  <div className='nav-item'>
          	   <a href="mailto:cru22779@uvg.edu.gt" data-label='Mail'></a>
        	  </div>
      		 </div>
    		</div>
  	)
}

export default NavBar

