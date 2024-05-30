import '../Style/ProfileTer.css'
import React, { useState, useEffect, useRef } from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter'

const ProfileTer = () => {
    const [input, setInput] = useState('')
    const [command, setCommand] = useState('')
    const [output, setOutput] = useState([])
    const terminalRef = useRef(null)

    const commands = {
        '-h': 'Comandos disponibles: -h, cat, ls, run, clear',
        'run': 'Ejecutando el programa...',
        'clear': 'clear'
    }

    const archives = {
        'aboutme.txt': 'Soy una persona proactiva, organizada y responsable. Mis intereses están enfocados en continuar aprendiendo desarrollo backend y base de datos relacionales.',
        'education.txt': 'Soy estudiante de CC y TI en la Universidad del Valle de Guatemala desde 2022.',
        'hobbies.txt': 'Me gusta pasar mi tiempo libre jugando videojuegos de estrategia en tiempo real, me encanta aprender más sobre tecnologías backend, y me gusta leer.'
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
                    cursor
                    cursorStyle='⏽'
                    typeSpeed={75}
                    delaySpeed={1000}
                />
                {output.map((item, index) => (
                    <div key={index}>
                        <span className='input-line'>{item.cmd}</span>
                        <br />
                        <Typewriter
                            words={[item.response]}
                            loop={1}
                            cursor
                            typeSpeed={50}
                            delaySpeed={300}
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

