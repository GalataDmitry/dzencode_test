interface TotalSumTypes {
    value: number
    symbol: string
}

interface PriceTypes {
    value: number
    symbol: string
    isDefault: number
}

export interface ProductsTypes {
    id: number
    serialNumber: number
    isNew: number
    photo: string
    title: string
    type: string
    specification: string
    guarantee: {
        start: string
        end: string
    },
    price: PriceTypes[]
    order: number,
    date: string
}

export interface OrdersTypes {
    id: number
    title: string
    date: string
    description: string
    products: ProductsTypes[]
    totalSum: TotalSumTypes[]
}

export interface InitialStateMainReducerTypes {
    filterType: string
    filterTypes: []
    orderIdVisible: { visible: boolean, orderId: number }
    orderIdDeleteModalTitle: number | null
    orders: OrdersTypes[]
    products: ProductsTypes[]
}