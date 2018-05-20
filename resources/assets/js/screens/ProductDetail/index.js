import React, {Component} from 'react'
import {DefaultLayout} from '../../components/Layout'
import ProductDetail from '../Home/components/Product'
import {fetchProductDetail} from '../../actions/products'
import './product.css'
import {connect} from 'react-redux'

const items = [
  {
    icon: 'fas fa-anchor',
    key: 'Tình trạng',
    value: 'Cũ'
  },
  {
    icon: 'fas fa-anchor',
    key: 'Km đã đi',
    value: '15km'
  },
  {
    icon: 'fas fa-anchor',
    key: 'Hộp số',
    value: 'Tự động'
  },
  {
    icon: 'fas fa-anchor',
    key: 'nhiên Liệu',
    value: 'Xăng'
  },
  {
    icon: 'fas fa-anchor',
    key: 'Năm sản xuất',
    value: '206'
  },
  {
    icon: 'fas fa-anchor',
    key: 'Xuất xứ',
    value: 'Nhập khẩu'
  }
]

class Product extends Component {
  state = {
    imageIndex: 0
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.slug)
  }

  render() {
    const {imageIndex} = this.state
    const {current: product} = this.props.products
    return !!Object.keys(product).length && (
      <DefaultLayout>
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="detail-car-info w-100">
                <h1>{product.name}</h1>
                <div className="detail-car-meta d-flex justify-content-between">
                  {items.map((item, index) => (
                    <div key={index} className="meta-item">
                      <i className={`${item.icon} mr-2`}/>
                      <span>{item.key}:</span>
                      <strong className="ml-1 meta-value">{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="car-image">
                <div className="main-image">
                  <img className="w-100" src={product.images[imageIndex].image}/>
                </div>
                <div className="thumbnails mt-2">
                  {product.images.map((image, index) => (
                    <img
                      onClick={() => this.setState({imageIndex: index})}
                      className="w-100"
                      key={index}
                      src={image.image} alt="thumb"
                    />
                  ))}
                  <div className="thumbnail-item">

                  </div>
                </div>
              </div>

              <div className="car-description">
                <h3>Mô tả xe</h3>
                <div className="car-description-text">
                  {product.description}
                </div>
              </div>

              <div className="similar-car">
                <h3>Bình luận</h3>

                <div className="fb-comments"
                     data-width="100%"
                     data-href={window.location.href}
                     data-numposts="5"/>
              </div>
            </div>
            <div className="col-md-3">
              <div className="car-price-right">
                <div className="text">
                  425 triệu
                </div>

                <div className="media border-0 mt-3 pl-0">
                  <img
                    style={{width: 60, height: 60}}
                    className="align-self-start mr-3"
                    src="https://loremflickr.com/60/60"
                    alt="Generic placeholder"
                  />
                  <div className="media-body">
                    <div className="mt-0">{product.user.name}</div>
                    <div className="text-muted">{product.user.phone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </DefaultLayout>
    )
  }
}

const mapStateToProps = ({products}) => ({products})
const mapDispatchToProps = dispatch => ({
  fetchProduct: (slug) => dispatch(fetchProductDetail(slug))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
