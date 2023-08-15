import {createSlice} from "@reduxjs/toolkit"
import {initialStateMainReducer} from "./InitialStateMainReducer"
import {ProductsTypes} from "./initialStateMainReducerTypes"

const mainReducer = createSlice({
    name: 'mainReducer',
    initialState: initialStateMainReducer,
    reducers: {
        setFilterType: (state, action) => {
            state.filterType = action.payload
        },
        setFilterTypes: (state, action) => {
            state.filterTypes = action.payload
        },
        setOrdersProducts: (state, action) => {
            state.orders.forEach(order => {
                order.products = action.payload.filter((product: ProductsTypes) => order.id === product.order)
                const flattenedPrices = order.products.flatMap(product => product.price)
                const totalSums = flattenedPrices.reduce((total, price) => {
                    if (price.symbol === 'USD') total.usd += price.value
                    else if (price.symbol === 'UAH') total.uah += price.value
                    return total
                }, {usd: 0, uah: 0})
                order.totalSum.forEach(value => {
                    if (value.symbol === 'USD') value.value = totalSums.usd
                    else if (value.symbol === 'UAH') value.value = totalSums.uah
                })
            })
        },
        setOrderIdVisible: (state, action) => {
            state.orderIdVisible.orderId = action.payload.orderId
            state.orderIdVisible.visible = action.payload.visible
        },
        setOrderIdlDeleteModalTitle: (state, action) => {
            state.orderIdDeleteModalTitle = action.payload
        }
    }
})
export const {
    setFilterType,
    setFilterTypes,
    setOrdersProducts,
    setOrderIdVisible,
    setOrderIdlDeleteModalTitle
} = mainReducer.actions
export default mainReducer.reducer