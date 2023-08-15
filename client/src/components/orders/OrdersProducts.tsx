import moment from "moment"
import {animated} from '@react-spring/web'
import {v4 as uuidv4} from 'uuid'
import DeleteOrderModal from "../modals/DeleteOrderModal"
import {setOrderIdVisible} from "../../toolkit/reducers/mainReducer"
import {useOrders} from "../../componentsHooks/componentsHooks"

export const OrdersList = () => {

    const {
        dispatch,
        orders,
        springs
    } = useOrders()

    return <div className="col">
        <animated.div style={{...springs}}>
            {orders.map(order => (
                <div key={order.id} className='container__items__products container border p-4 mt-3 text-center'>
                    <div className="row align-items-center">
                        <div className="col-2 fst-italic">{order.title}</div>
                        <div className="col-1 fst-italic">{order.products.length}</div>
                        <div className="col">
                            <div className="container__items__fontsize row fst-italic">
                                {order.totalSum.map(sum => (
                                    <div key={uuidv4()}>{sum.value} {sum.symbol}</div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="container__items__fontsize col fst-italic d-flex flex-column align-items-center">
                            <div className="row">
                                {moment(order.date, 'YYYY-MM-DD').format('MM/DD')}
                            </div>
                            <div className="row">
                                {moment(order.date, 'YYYY-MM-DD').format('DD/MMMM/YYYY')}
                            </div>
                        </div>
                        <div className="col"><DeleteOrderModal orderId={order.id}/></div>
                        <div className="col">
                            <button onClick={() =>
                                dispatch(setOrderIdVisible({visible: true, orderId: order.id}))}
                                    type="button"
                                    className="btn btn-secondary btn-sm">
                                details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </animated.div>
    </div>
}

export const ProductsList = () => {

    const {
        dispatch,
        orderProducts,
        orderTitle,
        orderIdVisible,
        springs
    } = useOrders()

    return <div className="col">
        <animated.div style={{...springs}}>
            {(orderIdVisible.visible && orderProducts.length > 0) &&
            <div className='container__items__products container border p-4 text-center mt-3'>
                <div className="row">
                    <div className="col ms-3 fst-italic">
                        {orderTitle}
                    </div>
                    <button onClick={() =>
                        dispatch(setOrderIdVisible({orderId: orderIdVisible.orderId, visible: false}))}
                            type="button" className="btn-close "/>
                </div>
                <hr/>
                {orderProducts.map(product => (
                    <div key={product.id} className="row">
                        <div className="col mb-3 fst-italic">{product.title}</div>
                        <div className="col mb-3 fst-italic">{product.type}</div>
                        <div className="col mb-3 fst-italic">{product.specification}</div>
                        <hr/>
                    </div>
                ))}
            </div>}
        </animated.div>
    </div>
}
