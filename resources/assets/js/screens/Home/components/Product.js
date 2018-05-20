import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { priceFormat } from '../../../helpers'

class Product extends React.PureComponent {
  render() {
    const { product } = this.props
    const state = product.details.find(detail => detail.alias === 'tinh_trang')
    const year = product.details.find(detail => detail.alias === 'nam_san_xuat')
    const km = product.details.find(detail => detail.alias === 'km_da_di')
    const hopSo = product.details.find(detail => detail.alias === 'hop_so')
    return (
      <div className="media">
        <img className="align-self-start mr-3"
             src={product.images[0].image}
             alt="Generic placeholder" />
        <div className="media-body">
          <Link to={`/xe/${product.slug}`}>
            <h5 className="mt-0">{product.name}</h5>
          </Link>
          <div className="car-price">{priceFormat(product.price)}</div>
          <div className="car-meta d-flex">
            <div className="meta-item mr-4">
              <i className="fas fa-tag mr-2" />
              {state.value}
            </div>

            <div className="meta-item mr-4">
              <i className="far fa-calendar mr-2" />
              {year.value}
            </div>

            <div className="meta-item mr-4">
              <i className="fas fa-road mr-2" />
              {km.value}
            </div>

            <div className="meta-item mr-4">
              <i className="fas fa-gamepad mr-2" />
              {hopSo.value}
            </div>
          </div>
          <div className="posted-time">
            {product.created_at}
          </div>
        </div>
      </div>
    )
  }
}

export default Product