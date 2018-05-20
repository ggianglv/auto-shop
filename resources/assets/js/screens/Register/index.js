import React from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import { routes } from '../../config/route'
import { Link } from 'react-router-dom'

class Register extends React.PureComponent {
  onFormSubmit = (event) => {
    event.preventDefault()
    console.log(111)
  }

  render() {
    return (
      <DefaultLayout>
        <section className="h-100 my-login-page">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Register</h4>
                    <form onSubmit={this.onFormSubmit}>

                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" className="form-control" name="name" required autoFocus />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">E-Mail Address</label>
                        <input id="email" type="email" className="form-control" name="email" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-control" name="password" required
                               data-eye />
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-6">
                            <button type="button" className="btn btn-primary btn-block btn-sm facebook">
                              Facebook
                            </button>
                          </div>

                          <div className="col-6">
                            <button type="button" className="btn btn-primary btn-block btn-sm google">
                              Google
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="form-group no-margin">
                        <button type="submit" className="btn btn-primary btn-block">
                          Register
                        </button>
                      </div>
                      <div className="margin-top20 text-center">
                        Đã có tài khoản ? <Link to={routes.login}>Đăng nhập</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    )
  }
}

export default Register