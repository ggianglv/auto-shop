import { get } from './http'
import { baseUrl } from '../config/const'

export const list = (params = {}) => get(`${baseUrl}/products`, params)

export const current = (slug) => get(`${baseUrl}/products/${slug}`)