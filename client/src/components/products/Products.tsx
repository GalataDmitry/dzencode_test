import moment from "moment"
import {animated} from '@react-spring/web'
import {useProducts} from "../../componentsHooks/componentsHooks"
import Select from "./Select"
import {PRODUCTS_ITEMS, PRODUCTS_TITLE, PRODUCTS_TYPE} from "../../__test__/test_ids"
import './Products.css'

const Products = () => {

    const {
        productsData,
        getOrderTitle,
        springs
    } = useProducts()

    return <animated.div style={{...springs}}>
        <Select/>
        {productsData.map(product => (
            <div key={product.id}
                 className='container__items__products container border p-4 text-center mt-3 fst-italic'
                 data-testid={PRODUCTS_ITEMS}>
                <div className="row align-items-center">
                    <div className="col-2" data-testid={PRODUCTS_TITLE}>{product.title}</div>
                    <div className="col-2" data-testid={PRODUCTS_TYPE}>{product.type}</div>
                    <div className="container__items__fontsize col-2 d-flex flex-column align-items-center">
                        <div className="row">
                            {moment(product.guarantee.start, 'YYYY-MM-DD').format('MM/DD')}
                        </div>
                        <div className="row">
                            {moment(product.guarantee.start, 'YYYY-MM-DD').format('DD/MMMM/YYYY')}
                        </div>
                    </div>
                    <div className="col-2 container__items__fontsize col-2 d-flex flex-column align-items-center">
                        <div className="row">
                            {moment(product.guarantee.end, 'YYYY-MM-DD').format('MM/DD')}
                        </div>
                        <div className="row">
                            {moment(product.guarantee.end, 'YYYY-MM-DD').format('DD/MMMM/YYYY')}
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="row container__items__fontsize">
                            {product.price.map((elem, index) => (
                                <div key={index}>
                                    {elem.value} {elem.symbol}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-2">
                        {getOrderTitle(product.order, product.id)}
                    </div>
                </div>
            </div>
        ))}
    </animated.div>
}

export default Products