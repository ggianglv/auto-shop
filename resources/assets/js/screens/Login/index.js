import React from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import {Link} from 'react-router-dom'
import {routes} from '../../config/route'
import {login, socialLogin} from '../../services/user'
import {setUser} from '../../actions/user'
import {connect} from 'react-redux'

class Login extends React.PureComponent {

  state = {
    email: '',
    password: '',
    message: {}
  }

  onInputChange = (field) => (event) => {
    this.setState({
      [field]: event.target.value
    })
  }

  componentDidMount() {
    window.gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = window.gapi.auth2.init({
        client_id: '436676563344-h8crdmr92i05h0kmp02rqnnurdemsli3.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      })

      this.auth2.attachClickHandler(this.googleBtn, {},
        (googleUser) => {
          const response = googleUser.getAuthResponse()
          const accessToken = response.id_token
          this.loginWithSocial('google', accessToken)
        }, (error) => {
          console.log('error')
        })
    })
  }

  loginWithSocial = async (provider, accessToken) => {
    const user = await socialLogin({
      provider,
      access_token: accessToken
    })
    this.props.setUser(user)
    this.props.history.push('/')
  }

  onFormSubmit = async (event) => {
    event.preventDefault()
    const {email, password} = this.state
    try {
      const user = await login({
        email,
        password
      })
      this.props.setUser(user)
      this.props.history.push('/')
    } catch (e) {
      this.setState({
        message: {
          type: 'danger',
          text: e.response.data.message
        }
      })
    }

  }

  onFbLogin = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status !== 'connected') {
        return window.FB.login((res) => {
          const accessToken = res.authResponse.accessToken
          this.loginWithSocial('facebook', accessToken)
        }, {scope: 'email'})
      }
      const accessToken = response.authResponse.accessToken
      this.loginWithSocial('facebook', accessToken)
    })
  }

  render() {
    const {email, password, message} = this.state

    return (
      <DefaultLayout>
        <section className="h-100 my-login-page">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                  <div className="card-body">
                    {!!Object.keys(message).length && (
                      <div className={`alert alert-${message.type}`}>{message.text}</div>
                    )}
                    <h4 className="card-title">Đăng nhập</h4>
                    <form onSubmit={this.onFormSubmit}>

                      <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input
                          value={email}
                          onChange={this.onInputChange('email')}
                          type="email" className="form-control"
                          name="email"
                          required/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                          value={password}
                          onChange={this.onInputChange('password')}
                          type="password"
                          className="form-control"
                          name="password" required
                          data-eye/>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-6">
                            <button
                              onClick={this.onFbLogin}
                              type="button"
                              className="btn btn-primary btn-block btn-sm facebook">
                              Facebook
                            </button>
                          </div>

                          <div className="col-6">
                            <button
                              ref={ref => this.googleBtn = ref}
                              type="button" className="btn btn-primary btn-block btn-sm google">
                              Google
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="form-group no-margin">
                        <button type="submit" className="btn btn-primary btn-block">
                          Đăng nhập
                        </button>
                      </div>
                      <div className="margin-top20 text-center">
                        Chưa có tài khoản ? <Link to={routes.register}>Đăng ký</Link>
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

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(Login)