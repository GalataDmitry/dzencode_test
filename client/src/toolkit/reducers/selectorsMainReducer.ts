import {RootState} from "../toolkitHooks"

export const productsSelector = (state: RootState) => state.mainReducer
export const ordersSelector = (state: RootState) => state.mainReducer