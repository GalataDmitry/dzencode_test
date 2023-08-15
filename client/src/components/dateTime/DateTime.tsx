import moment from "moment"
import {useEffect, useState} from "react"

const DateTime = () => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date())
    const dateTime = moment(currentDateTime).format(' MMMM Do YYYY HH:mm:ss')

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return <div className="fst-italic">{dateTime}</div>
}

export default DateTime