import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import './style.css'

class DefaultLayout extends React.PureComponent {
  render() {
    return (
      <div className="app d-flex flex-column h-100">
        <Header />
        <div className="flex-grow-1">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout