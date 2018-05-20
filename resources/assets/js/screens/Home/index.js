import React, { Component } from 'react'
import './home.css'
import { DefaultLayout } from '../../components/Layout'
import SearchBox from './components/SearchBox'
import Product from './components/Product'
import { fetchList } from '../../actions/products'
import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount() {
    const { list } = this.props.products
    if (!list.current_page) {
      this.props.fetchProductList({ page: 1 })
    }
  }

  prev = () => {
    const { list } = this.props.products
    this.props.fetchProductList({ page: list.current_page - 1 })
  }

  next = () => {
    const { list } = this.props.products
    this.props.fetchProductList({ page: list.current_page + 1 })
  }

  renderList = () => {
    const { loading, list } = this.props.products

    if (loading) {
      return 'Loading...'
    }
    if (list.data.length) {
      return list.data.map((product, index) => (
        <Product product={product} key={index} />
      ))
    }

    return <h5>Không có sản phẩm nào</h5>
  }

  render() {
    const { list } = this.props.products

    return (
      <DefaultLayout>
        <main role="main" className="container">
          <div className="jumbotron p-3">
            <p className="lead mb-0">Website mua bán xe cũ, mới hàng đầu tại Việt Nam</p>
          </div>
          <div className="row">
            <SearchBox />
            {!!Object.keys(list).length && (
              <div className="col-md-9 list-auto">
                <h2>Danh sách</h2>
                {this.renderList()}
                {!!list.data.length && (
                  <div
                    className={`page d-flex mt-3 ${list.current_page <= 1 ? 'justify-content-end' : 'justify-content-between' }`}>
                    {list.current_page > 1 && (
                      <button onClick={this.prev} className="btn btn-secondary">Trang Trước</button>
                    )}
                    {list.last_page > list.current_page && (
                      <button onClick={this.next} className="btn btn-secondary">Trang sau</button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </DefaultLayout>
    )
  }
}

const mapStateToProps = ({ products }) => ({ products })

const mapDispatchToProps = dispatch => ({
  fetchProductList: (params) => dispatch(fetchList(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
