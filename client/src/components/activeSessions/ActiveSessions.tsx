import io from 'socket.io-client'
import {useEffect, useState} from "react"

const ActiveSessions = () => {

    const [activeSessions, setActiveSessions] = useState(0)

    useEffect(() => {
        const socket = io('http://localhost:3040')
        socket.on('connect', () => {})
        socket.on('activeSessions', (count: number) => {
            setActiveSessions(count)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return <div className="fst-italic">Active session(s): {activeSessions}</div>
}

export default ActiveSessions