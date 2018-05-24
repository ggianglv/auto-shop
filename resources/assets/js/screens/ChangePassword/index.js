import React from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import {routes} from '../../config/route'
import {changePassword} from '../../services/user'
import {connect} from 'react-redux'

class ChangePassword extends React.PureComponent {
  state = {
    oldPassword: '',
    password: '',
    confirm: '',
    error: {}
  }

  componentWillMount() {
    const {user} = this.props
    if (!Object.keys(user).length) {
      this.props.history.replace(routes.login)
    }
  }

  onInputChange = (field) => (event) => {
    this.setState({
      [field]: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const {password, oldPassword, confirm} = this.state
    if (confirm !== password) {
      this.setState({
        error: {
          type: 'danger',
          text: 'Xác nhận mật khẩu không đúng'
        }
      })
    }
    changePassword({
      old: oldPassword,
      password,
      confirm
    })
  }

  render() {
    const {oldPassword, password, confirm, error} = this.state
    return (
      <DefaultLayout>
        <section className="h-100 my-login-page">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                  <div className="card-body">
                    {!!Object.keys(error).length && <div className={`alert alert-${error.type}`}>{error.text}</div>}
                    <h4 className="card-title">Đổi mật khẩu</h4>
                    <form onSubmit={this.onFormSubmit}>

                      <div className="form-group">
                        <label htmlFor="email">Mật khẩu cũ</label>
                        <input
                          value={oldPassword}
                          onChange={this.onInputChange('oldPassword')}
                          type="password" className="form-control" name="email"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Mật khẩu mới</label>
                        <input
                          value={password}
                          onChange={this.onInputChange('password')}
                          type="password" className="form-control" name="password" required
                          data-eye
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Nhập lại mật khẩu mới</label>
                        <input
                          value={confirm}
                          onChange={this.onInputChange('confirm')}
                          type="password" className="form-control" name="password" required
                          data-eye/>
                      </div>

                      <div className="form-group no-margin">
                        <button type="submit" className="btn btn-primary btn-block">
                          Đổi mật khẩu
                        </button>
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

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(ChangePassword)