import {store} from "./store"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> =useSelector
