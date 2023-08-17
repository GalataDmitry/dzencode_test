import {act, render, renderHook, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {Provider} from 'react-redux'
import {store} from "../toolkit/store"
import {setFilterType} from "../toolkit/reducers/mainReducer"
import {PRODUCTS_ITEMS, PRODUCTS_SELECT, PRODUCTS_TITLE, PRODUCTS_TYPE} from "./test_ids"
import Products from "../components/products/Products"
import {useProducts} from "../componentsHooks/componentsHooks"

describe('Products', () => {
    it('should render filtered products list',  () => {

        render(<Provider store={store}><Products/></Provider>)
        const {result} = renderHook(() => useProducts(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })

        const productsSelect = screen.getByTestId(PRODUCTS_SELECT)
        expect(productsSelect).toBeInTheDocument()

        expect(screen.getAllByTestId(PRODUCTS_ITEMS)).toHaveLength(4)
        expect(result.current.productsData).toHaveLength(4)

        act(() => {
            userEvent.selectOptions(productsSelect, "TV")
            store.dispatch(setFilterType('TV'))
        })

        expect(productsSelect).toHaveTextContent('TV')

        expect(screen.getAllByTestId(PRODUCTS_ITEMS)).toHaveLength(1)
        expect(result.current.productsData).toHaveLength(1)

        expect(screen.getByTestId(PRODUCTS_TITLE)).toHaveTextContent(result.current.productsData[0].title)
        expect(screen.getByTestId(PRODUCTS_TYPE)).toHaveTextContent(result.current.productsData[0].type)
    })
})