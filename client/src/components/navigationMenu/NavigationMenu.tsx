import SelectedNavLink from "./SelectedNavLink"
import './NavigationMenu.css'

const NavigationMenu = () => {

    return <nav className="sidebar__content col-md-1 bg-light">
            <ul className="nav flex-column">
                <li className="sidebar__content__margin nav-item">
                    <SelectedNavLink to="products">Products</SelectedNavLink>
                </li>
                <li className="nav-item">
                    <SelectedNavLink to="orders">Orders</SelectedNavLink>
                </li>
            </ul>
    </nav>
}

export default NavigationMenu