import '../Style/Skills.css'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Skills = () => {
	const skills = [
		{name:'Python',icon:'',effiency:90},
		{name:'Java',icon:'',effiency:85},
		{name:'C++',icon:'',effiency:70},
		{name:'Kotlin',icon:'',effiency:70},
		{name:'JavaScript',icon:'',effiency:80},
		{name:'CSS',icon:'',effiency:80},
		{name:'PostgreSQL',icon:'',effiency:85},
		{name:'Neo4j',icon:'',effiency:70},
	]

	const CircularStyle = buildStyles({
  		rotation: 0.25,
  		strokeLinecap: 'round',
  		textSize: '16px',
  		pathTransitionDuration: 0.5,
  		pathColor: `var(--focus)`,
  		textColor: 'var(--text)',
  		trailColor: '#d6d6d6',
		valueAnimation:true,
		loadingTime: 1000,
	})

	return (
		<div className='skills'>
      		 <div className='skills-container'>
       	 	 {skills.map((skill, index) => (
          	  <div className='card-skill' key={index}>
            	   <div className='card-inner'>
              	    <div className='card-front'>
                     <span className="icon">{skill.icon}</span>
              	    </div>
                   <div className='card-back'>
		     <div className='progress-b'>
		      <CircularProgressbar styles={CircularStyle} value={skill.effiency} text={`${skill.effiency}%`}/>
		     </div>
		     <span className='body-percent'>{skill.name}</span>
                   </div>
            	  </div>
                 </div>
        	))}
      	       </div>
    	     </div>
	)
}

export default Skills
