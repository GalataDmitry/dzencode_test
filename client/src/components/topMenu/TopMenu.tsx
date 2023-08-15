import DateTime from "../dateTime/DateTime"
import ActiveSessions from "../activeSessions/ActiveSessions"
import './TopMenu.css'

const TopMenu = () => {
    return <nav className=" navbar__content navbar navbar-expand-lg bg-light sticky-top">
        <ul className="navbar__list navbar-nav">
            <li className="nav-item mt-2 me-4">
                <ActiveSessions/>
            </li>
            <li className="navbar__current-date-time nav-item mt-2 me-2">
                <DateTime/>
            </li>
        </ul>
    </nav>
}

export default TopMenu