import {useSpring} from "react-spring"
import {useEffect, useState} from "react"
import {useAppDispatch, useAppSelector} from "../toolkit/toolkitHooks"
import {ordersSelector, productsSelector} from "../toolkit/reducers/selectorsMainReducer"
import {setFilterTypes, setOrdersProducts} from "../toolkit/reducers/mainReducer"
import {ProductsTypes} from "../toolkit/reducers/initialStateMainReducerTypes"

export const useProducts = () => {

    const springs = useSpring({
        from: {y: -250},
        to: {y: 0},
    })

    const dispatch = useAppDispatch()
    const {products, filterTypes, orders, filterType} = useAppSelector(productsSelector)

    const getOrderTitle = (productOrder: number, productId: number) => {
        let filteredOrders = orders.filter(order => order.id === productOrder).map(elem => elem.title)
        return filteredOrders.map(order => <div key={productId}>{order}</div>)
    }

    useEffect(() => {
        const typesForFiltration = products.map(product => product.type)
            .filter((type, index, array) => array
                .indexOf(type) === index)
        dispatch(setFilterTypes(typesForFiltration))
    }, [])

    let productsData: ProductsTypes[] = []
    if (filterType) {
        productsData = products.filter(product => product.type === filterType)
    } else {
        productsData = products
    }

    return {
        dispatch,
        productsData,
        filterTypes,
        filterType,
        getOrderTitle,
        springs
    }
}

export const useOrders = () => {

    const springs = useSpring({
        from: {x: 150},
        to: {x: 0},
    })

    const dispatch = useAppDispatch()
    const {orders, products, orderIdVisible} = useAppSelector(ordersSelector)
    const [ordersLocalState, setOrdersLocalState] = useState({visible: false, orderId: -1})

    let orderProducts: ProductsTypes[] = []
    let orderTitle: string | undefined = ''
    if (orderIdVisible.orderId) {
        [orderProducts] = orders.filter(order => order.id === orderIdVisible.orderId).map(order => order.products)
        orderTitle = orders.find(order => order.id === orderIdVisible.orderId)?.title
    }

    useEffect(() => {
        dispatch(setOrdersProducts(products))
    }, [])

    return {
        dispatch,
        orders,
        orderProducts,
        orderTitle,
        orderIdVisible,
        ordersLocalState,
        setOrdersLocalState,
        springs
    }
}

export const useDeleteOrderModal = () => {
    const dispatch = useAppDispatch()
    const {orders, orderIdDeleteModalTitle} = useAppSelector(ordersSelector)

    let deleteModalTitle: string | undefined
    if (orderIdDeleteModalTitle) {
        deleteModalTitle = orders.find(order => order.id === orderIdDeleteModalTitle)?.title
    }
    return {
        dispatch,
        deleteModalTitle
    }
}