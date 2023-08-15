import {Link, useMatch} from "react-router-dom"
import {AnimatedNavLinkPropsTypes} from "../componentsPropsTypes/ComponentsPropsTypes"

const SelectedNavLink = ({to, children}: AnimatedNavLinkPropsTypes) => {
    const match = useMatch(to)
    return <Link to={to} className={match ? 'nav-link active' : 'nav-link'}>
        {children}
    </Link>
}

export default SelectedNavLink