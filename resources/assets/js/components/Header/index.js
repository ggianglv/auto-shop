import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../config/route'

class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <Link className="nav-link" to={routes.home}>Chợ xe</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={routes.register}>Đăng ký</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.login}>Đăng nhập</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header