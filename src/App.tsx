import React, { Suspense } from 'react'
import '@/css/index.less'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/friend">朋友</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="loading..">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
