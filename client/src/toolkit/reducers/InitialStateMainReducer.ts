import {InitialStateMainReducerTypes, OrdersTypes, ProductsTypes} from "./initialStateMainReducerTypes"

const order: OrdersTypes = {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 ',
    description: 'desc',
    products: [],
    totalSum: [
        {value: 0, symbol: 'USD'},
        {value: 0, symbol: 'UAH'}
    ]
}

export const product: ProductsTypes = {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'TV',
    specification: 'Specification 1',
    guarantee: {
        start: '2017-06-30',
        end: '2019-08-25'
    },
    price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29'
}

export const initialStateMainReducer: InitialStateMainReducerTypes = {
    filterType: '',
    filterTypes: [],
    orderIdVisible: {visible: false, orderId: -1},
    orderIdDeleteModalTitle: null,
    orders: [
        {...order},
        {
            ...order,
            id: 2,
            title: 'Order 2',
        },
        {
            ...order,
            id: 3,
            title: 'Order 3',
        }
    ],
    products: [
        {...product},
        {
            ...product,
            id: 2,
            title: 'Product 2',
            type: 'Monitors',
            order: 2,
        },
        {
            ...product,
            id: 3,
            title: 'Product 3',
            type: 'Mixer',
            order: 1,
        },
        {
            ...product,
            id: 4,
            title: 'Product 3',
            type: 'Mixer',
            order: 1,
        },
    ]
}