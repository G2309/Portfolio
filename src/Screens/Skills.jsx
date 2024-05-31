import '../Style/Skills.css'
import { CircularProgressbar } from 'react-circular-progressbar'
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
	return (
		<div className="skills">
      		 <div className="skills-container">
       	 	 {skills.map((skill, index) => (
          	  <div className="card-skill" key={index}>
            	   <div className="card-inner">
              	    <div className="card-front">
                     <span className="icon">{skill.icon}</span>
              	    </div>
                   <div className="card-back">
		    <CircularProgressbar value={skill.effiency} text={`${skill.effiency}%`}/>
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
