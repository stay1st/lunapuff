import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Portfolio from '../Portfolio'
import './index.scss'

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>
        <Outlet />
        <Portfolio />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
