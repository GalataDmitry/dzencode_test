import {Route, Routes} from "react-router-dom"
import Layout from "../layout/Layout"
import Products from "../products/Products"
import Orders from "../orders/Orders"
import TopMenu from "../topMenu/TopMenu"
import NotFound from "../notFound/NotFound";

const App = () => {

    return <>
        <TopMenu/>
        <Layout>
            <Routes>
                <Route path='/*' element={<NotFound/>}/>
                <Route path='' element={<Products/>}>Products</Route>
                <Route path='products' element={<Products/>}>Products</Route>
                <Route path='orders' element={<Orders/>}>Orders</Route>
            </Routes>
        </Layout>
    </>
}

export default App
