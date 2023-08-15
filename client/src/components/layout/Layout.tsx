import NavigationMenu from "../navigationMenu/NavigationMenu"
import {LayoutPropsTypes} from "../componentsPropsTypes/ComponentsPropsTypes"
import './Layout.css'

const Layout = ({children}: LayoutPropsTypes) => {
return <div className="container-fluid">
    <div className="row">
        <NavigationMenu />
        <main className="col-md-5 ms-sm-auto col-lg-11 px-md-4">
            {children}
        </main>
    </div>
</div>
}

export default Layout