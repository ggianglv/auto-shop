import {post} from './http'
import {baseUrl} from '../config/const'

export const socialLogin = (data) => post(`${baseUrl}/api/social-login`, data)
export const changePassword = (data) => post(`${baseUrl}/api/change-password`, data)