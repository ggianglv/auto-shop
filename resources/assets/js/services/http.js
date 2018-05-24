import axios from 'axios'

const data = JSON.parse(localStorage.getItem('persist:root'))
const token = data && JSON.parse(data.user) ? JSON.parse(data.user).token : ''

const options = {
  headers: {
    Authorization: token ? `Bearer ${token}` : ''
  }
}

export const post = (url, data = {}) => new Promise((resolve, reject) => {
  return axios.post(url, data, {...options}).then(({data}) => resolve(data)).catch((error) => {
    reject(error)
  })
})

export const get = (url, params) => new Promise((resolve, reject) => {
  axios.get(url, {params}).then(({data}) => resolve(data)).catch((error) => {
    reject(error)
  })
})