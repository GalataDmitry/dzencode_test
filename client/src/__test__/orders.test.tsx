import {act, render, renderHook, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {Provider} from 'react-redux'
import {store} from "../toolkit/store"
import Orders from "../components/orders/Orders"
import {useOrders} from "../componentsHooks/componentsHooks"
import {
    CLOSE_ORDER_DETAILS_BUTTON,
    DELETE_BUTTON,
    MODAL_TITLE, ORDER_TITLE,
    ORDERS_ITEMS,
    ORDERS_PRODUCTS_DETAILS,
    PRODUCTS_DETAILS_BUTTON,
    REMOVE_ORDER_BUTTON
} from "./test_ids"
import {removeOrder, setOrderIdlDeleteModalTitle, setOrderIdVisible} from "../toolkit/reducers/mainReducer"

describe('Orders', () => {
    it('should delete order', () => {

        render(<Provider store={store}><Orders/></Provider>)
        const {result} = renderHook(() => useOrders(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })

        expect(result.current.orders).toHaveLength(3)
        expect(screen.getAllByTestId(new RegExp(ORDERS_ITEMS))).toHaveLength(3)
        expect(screen.getAllByTestId(new RegExp(DELETE_BUTTON))).toHaveLength(3)

        const currentOrder = result.current.orders[2]

        const deleteButton = screen.getByTestId(`${DELETE_BUTTON}-${currentOrder.id}`)
        expect(deleteButton).toBeInTheDocument()

        let modalTitleId = store.getState().mainReducer.orderIdDeleteModalTitle
        expect(modalTitleId).toBeNull()

        act(() => {
            userEvent.click(deleteButton)
            store.dispatch(setOrderIdlDeleteModalTitle(currentOrder.id))
        })

        modalTitleId = store.getState().mainReducer.orderIdDeleteModalTitle
        expect(modalTitleId).toBe(3)

        const modalTitle = screen.getByTestId(`${MODAL_TITLE}-${modalTitleId}`)
        expect(modalTitle).toHaveTextContent(`Delete ${currentOrder.title}`)

        const removeOrderButton = screen.getByTestId(`${REMOVE_ORDER_BUTTON}-${currentOrder.id}`)
        expect(removeOrderButton).toBeVisible()

        act(() => {
            userEvent.click(removeOrderButton)
            store.dispatch(removeOrder())
        })

        expect(screen.queryByTestId(`${ORDERS_ITEMS}-${currentOrder.id}`)).not.toBeInTheDocument()
        expect(removeOrderButton).not.toBeInTheDocument()
        expect(result.current.orders).toHaveLength(2)
        expect(screen.getAllByTestId(new RegExp(ORDERS_ITEMS))).toHaveLength(2)
    })
    it('should render products details and close', () => {

        render(<Provider store={store}><Orders/></Provider>)
        const {result} = renderHook(() => useOrders(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })

        expect(screen.getAllByTestId(new RegExp(PRODUCTS_DETAILS_BUTTON))).toHaveLength(2)

        const currentOrder = result.current.orders[0]

        const orderDetailsButton = screen.getByTestId(`${PRODUCTS_DETAILS_BUTTON}-${currentOrder.id}`)
        expect(orderDetailsButton).toBeInTheDocument()

        expect(screen.queryByTestId(ORDERS_PRODUCTS_DETAILS)).not.toBeInTheDocument()

        act(() => {
            userEvent.click(orderDetailsButton)
            store.dispatch(setOrderIdVisible({visible: true, orderId: currentOrder.id}))
        })

        expect(store.getState().mainReducer.orderIdVisible).toStrictEqual({visible: true, orderId: currentOrder.id})
        expect(screen.getByTestId(ORDERS_PRODUCTS_DETAILS)).toBeInTheDocument()

        const orderTitle = screen.getByTestId(ORDER_TITLE)
        expect(orderTitle).toBeVisible()
        expect(orderTitle).toHaveTextContent(currentOrder.title)

        const closeOrdersDetailsButton = screen.getByTestId(CLOSE_ORDER_DETAILS_BUTTON)
        expect(closeOrdersDetailsButton).toBeVisible()

        act(() => {
            userEvent.click(closeOrdersDetailsButton)
            store.dispatch(setOrderIdVisible({visible: false, orderId: currentOrder.id}))
        })

        expect(store.getState().mainReducer.orderIdVisible).toStrictEqual({visible: false, orderId: currentOrder.id})
        expect(screen.queryByTestId(ORDERS_PRODUCTS_DETAILS)).not.toBeInTheDocument()
    })
})