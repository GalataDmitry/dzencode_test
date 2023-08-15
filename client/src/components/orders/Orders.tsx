import {OrdersList, ProductsList} from "./OrdersProducts"
import './Orders.css'

const Orders = () => {

    return <div className="row">
        <OrdersList/>
        <ProductsList/>
    </div>
}

export default Orders