import { post } from './http'
import { baseUrl } from '../config/const'

export const socialLogin = (data) => post(`${baseUrl}/api/social-login`, data)