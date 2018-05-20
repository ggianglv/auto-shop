import axios from 'axios'

export const post = (url, data = {}) => new Promise((resolve, reject) => {
  return axios.post(url, data).then(({ data }) => resolve(data)).catch((error) => {
    reject(error)
  })
})

export const get = (url, params) => new Promise((resolve, reject) => {
  axios.get(url, { params }).then(({ data }) => resolve(data)).catch((error) => {
    reject(error)
  })
})