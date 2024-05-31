import '../Style/ProfileTer.css'
import React, { useState, useEffect, useRef } from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter'

const ProfileTer = () => {
    const [input, setInput] = useState('')
    const [command, setCommand] = useState('')
    const [output, setOutput] = useState([])
    const terminalRef = useRef(null)

    const commands = {
        '-h': 'Comandos disponibles: -h, cat, ls, clear',
        'clear': 'clear'
    }

    const archives = {
        'aboutme.txt': 'Soy una persona proactiva, organizada y responsable. Mis intereses están enfocados en continuar aprendiendo desarrollo backend y base de datos relacionales.',
        'education.txt': 'Soy estudiante de CC y TI en la Universidad del Valle de Guatemala desde 2022.',
        'hobbies.txt': 'Me gusta pasar mi tiempo libre jugando videojuegos de estrategia en tiempo real, me encanta aprender más sobre tecnologías backend, y me gusta leer.',
	'technologies.txt':'- Vite: Herramienta de construcción rápida y moderna utilizada para simplificar el desarrollo y el despliegue del front-end en el Proyecto 1. \n- Next.js: Framework versátil con su propia API interna, utilizado en el último proyecto para desarrollo web dinámico. \n- React: Biblioteca de JavaScript ampliamente utilizada en el curso por su facilidad de uso y reutilización de código. \n- CDN: Red de distribución de contenido utilizada en un laboratorio para la entrega eficiente de recursos web.\n- Docker: Plataforma de contenedores que simplifica el desarrollo y la implementación de aplicaciones, ampliamente adoptada en proyectos posteriores.\n- HTML, CSS, JS: Tecnologías fundamentales para la creación de páginas web, preferiendo JSX por su familiaridad y capacidad de reutilización.\n- Nginx: Servidor web utilizado en Ubuntu con AWS para habilitar puertos y servir páginas web, brindando una experiencia nueva y valiosa en la configuración de servidores.\n- AWS: Plataforma de servicios en la nube utilizada para la configuración de servidores y el despliegue de aplicaciones, ofreciendo una experiencia enriquecedora y una infraestructura escalable.\n- Express: Framework de Node.js utilizado para crear APIs en proyectos, facilitando el manejo de solicitudes HTTP y el desarrollo de servicios web.',
	'thoughts.txt': 'Durante el curso, exploré una variedad de nuevas tecnologías que ampliaron mi comprensión en desarrollo web y administración de servidores. Todo lo visto fue nuevo para mí, pues no tenía experiencia en ninguno de los lenguajes vistos, ni frameworks, y tampoco tenía idea de como crear una api. De lo visto en clase, destacaría la simplicidad de uso de Vite y Docker, así como la versatilidad de Next.js. AWS y Nginx brindaron una experiencia nueva y emocionante en la configuración y despliegue de servidores. En general, cada tecnología ofreció nuevas oportunidades para aprendizaje en mi camino como estudiante de CC y TI.',
    }

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [output])

    const handleCommand = (cmd) => {
        if (cmd === 'clear') {
            setOutput([])
        } else if (cmd === 'ls') {
            const fileList = Object.keys(archives).join('\n')
            setOutput([...output, { cmd, response: fileList }])
        } else if (cmd.startsWith('cat')) {
            const fileNames = cmd.split(' ').slice(1)
            const responses = fileNames.map(name => archives[name] || `Archivo no encontrado: ${name}`).join('\n')
            setOutput([...output, { cmd, response: responses }])
        } else {
            const response = commands[cmd] || 'Comando no encontrado'
            setOutput([...output, { cmd, response }])
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleCommand(command)
            setCommand('')
        }
    }

    return (
        <div className='terminal' ref={terminalRef}>
            <div className='terminal-text'>
                <Typewriter
                    words={['Para ver los comandos, escriba: -h']}
                    loop={1}
                    typeSpeed={30}
                    delaySpeed={300}
                />
                {output.map((item, index) => (
                    <div key={index}>
                        <span className='input-line'>{item.cmd}</span>
                        <br />
                        <Typewriter
                            words={[item.response]}
                            typeSpeed={10}
                            delaySpeed={100}
                        />
                    </div>
                ))}
                <div className='input-line'>
                    <span>$ </span>
                    <input className='input-style' type='text' value={command} onChange={(e) => setCommand(e.target.value)} onKeyPress={handleKeyPress} autoFocus/>
                </div>
            </div>
        </div>
    )
}

export default ProfileTer

