import React from 'react'
import { priceFormat } from '../../../helpers'
import { connect } from 'react-redux'
import { setFilter as setFilterAction } from '../../../actions/filters'
import { fetchList } from '../../../actions/products'

const priceFilter = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  1000,
  1200,
  1400,
  1600,
  2000,
  3000,
  5000,
]

class SearchBox extends React.PureComponent {
  state = {
    filters: {
      min_price: 100,
      max_price: 5000,
      type: 'cũ',
      year: 2018,
    }
  }

  onInputChange = (key, event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        [key]: event.target.value,
      },
    })
  }

  getMinPriceList = () => {
    const { max_price } = this.state.filters
    return max_price ? priceFilter.filter(p => p <= max_price) : priceFilter
  }

  getMaxPriceList = () => {
    const { min_price } = this.state.filters
    return min_price ? priceFilter.filter(p => p >= min_price) : priceFilter
  }

  filter = () => {
    this.props.setFilter(this.state.filters)
    this.props.fetchProductList()
  }

  render() {
    const { min_price, max_price, type } = this.state.filters

    return (
      <div className="col-md-3">
        <div className="search-box bg-light p-3">
          <div className="form">
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <div className="custom-control custom-radio">
                    <input
                      checked={type === 'cũ'}
                      onChange={(e) => this.onInputChange('type', e)}
                      value="cũ"
                      type="radio"
                      id="customRadio2"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="customRadio2">Xe cũ</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="custom-control custom-radio">
                    <input
                      checked={type === 'mới'}
                      onChange={(e) => this.onInputChange('type', e)}
                      value="mới"
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="customRadio1">Xe mới</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Giá bán</label>
              <div className="row">
                <div className="col-6">
                  <select value={min_price} onChange={(e) => this.onInputChange('min_price', e)}
                          className="form-control">
                    {this.getMinPriceList().map((price, index) => (
                      <option key={index} value={price}>{priceFormat(price)}</option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <select value={max_price} onChange={(e) => this.onInputChange('max_price', e)}
                          className="form-control">
                    {this.getMaxPriceList().map((price, index) => (
                      <option key={index} value={price}>{priceFormat(price)}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Năm sản xuất</label>
              <select onChange={(e) => this.onInputChange('year', e)} className="form-control">
                {[...Array(20)].map((year, index) => (
                  <option key={index} value={2018 - index}>{2018 - index}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <button onClick={this.filter} className="btn btn-secondary btn-block">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setFilter: (data) => dispatch(setFilterAction(data)),
  fetchProductList: (params) => dispatch(fetchList(params)),
})

export default connect(null, mapDispatchToProps)(SearchBox)