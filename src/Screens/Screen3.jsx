import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../Style/Screen3.css'
import img1 from '/img1.png'
import img2 from '/img2.png'
import img3 from '/img3.png'

const proyectos = [
  {
    id: 1,
    imagen: img1,
    descripcion: 'Laboratorio utilizando HTML. No se utilizo ni CSS ni JavaScript para el resultado final de la pagina',
    link: 'http://3.134.217.203/lab3/'
  },
  {
    id: 2,
    imagen: img2,
    descripcion: 'Laboratorio donde el objetivo era hacer una imagen a partir de CSS, sin utilizar otro lenguaje, y apoyandonos de HTML para la estructura del CSS',
    link: 'http://3.134.217.203/css_only/'
  },
  {
    id: 3,
    imagen: img3,
    descripcion: 'Laboratorio donde se realizo unchat que consumia una api dedicada para el salon. Se utilizo únicamente JS. Para los estilos se uso directamente en el JS.',
    link: 'http://3.134.217.203/chat/'
  },
  {
    id: 4,
    imagen: img2,
    descripcion: 'Laboratorio donde el objetivo era hacer una imagen a partir de CSS, sin utilizar otro lenguaje, y apoyandonos de HTML para la estructura del CSS',
    link: 'http://3.134.217.203/css_only/'
  },
  {
    id: 5,
    imagen: img2,
    descripcion: 'Laboratorio donde el objetivo era hacer una imagen a partir de CSS, sin utilizar otro lenguaje, y apoyandonos de HTML para la estructura del CSS',
    link: 'http://3.134.217.203/css_only/'
  },
]


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const Screen3 = () => {
	return (
		<div className="pantalla-tres">
      	 	 <Carousel responsive={responsive} className="carrusel">
          	  {proyectos.map((proyecto) => (
          	   <div key={proyecto.id} className="contenedor-carrusel">
            	    <div className="elemento-carrusel">
              	     <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
                	<div className="vista-previa">
                  	 <img src={proyecto.imagen} alt={`Proyecto ${proyecto.id}`} />
                  	  <div className="descripcion">{proyecto.descripcion}</div>
                	</div>
              	     </a>
            	    </div>
          	   </div>
        	  ))}
      		</Carousel>
    		</div>
  	)
}

export default Screen3

