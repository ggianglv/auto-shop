import React from 'react'

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="page-footer font-small indigo pt-0 text-small">
        <div className="footer-copyright py-3 text-center">
          © 2018 Copyright:
          <a href="/"> choxe.net</a>
        </div>
      </footer>
    )
  }
}

export default Footer