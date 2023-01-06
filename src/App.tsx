import React, { Suspense } from 'react'
import '@/css/index.less'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from '@/store/hooks/useApp'
import { changeMessageAction } from '@/store/modules/counter'

function App() {
  const selector = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  const handleChangeMessage = () => {
    dispatch(changeMessageAction('哈哈哈哈'))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/friend">朋友</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数: {selector.count}</h2>
      <h2>当前message: {selector.message}</h2>
      <button onClick={handleChangeMessage}>修改message</button>
      <Suspense fallback="loading..">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
