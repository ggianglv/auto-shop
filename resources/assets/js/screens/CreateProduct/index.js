import React from 'react'
import {DefaultLayout} from '../../components/Layout'
import Dropzone from 'react-dropzone'

const infoList = [
  {
    alias: 'tinh_trang',
    key: 'Tình trạng',
  },
  {
    alias: 'km_da_di',
    key: 'Km Đã đi',
  },
  {
    alias: 'hop_so',
    key: 'Hộp số',
  },
  {
    alias: 'nhien_lieu',
    key: 'Nhiên liệu',
  },
  {
    alias: 'nam_san_xuat',
    key: 'Năm sản xuất',
  },
  {
    alias: 'mau_xe',
    key: 'Màu xe',
  },
  {
    alias: 'xuat_xu',
    key: 'Xuất xứ',
  },
]

class CreateProduct extends React.Component {
  state = {
    images: [],
  }

  onDrop = (images) => {
    this.setState({
      images,
    })
  }

  render() {
    return (
      <DefaultLayout>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Tên</label>
              <input type="text" className="form-control"/>
            </div>

            <div className="form-group">
              <label>Mô tả</label>
              <textarea className="form-control"/>
            </div>

            <div className="form-group">
              <label>Hình sản phẩm</label>
              <Dropzone onDrop={this.onDrop}/>
              <div className="list-images">
                {this.state.images.map((image, index) => (
                  <div className="mt-1" key={index}>{image.name}</div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Thông tin chi tiết</label>
              <div className="row">
                {infoList.map((item, index) => (
                  <div className="col-md-4 mt-2">
                    <input type="text" placeholder={item.key} className="form-control"/>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <button className="btn btn-primary pull-right">Lưu lại</button>
            </div>
          </form>
        </div>
      </DefaultLayout>
    )
  }
}

export default CreateProduct
