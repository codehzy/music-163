import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import store from '@/store'

// 获取store中的state类型
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type IAppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => IAppDispatch = useDispatch
