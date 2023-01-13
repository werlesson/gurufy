/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios'
import { getSession } from 'next-auth/react'

const AxiosDefault = axios.create({
  baseURL: process.env.BASE_URL || 'https://data-driven.azurewebsites.net',
  headers: {
    Accept: 'application/json'
  }
})

const AxiosAuthenticated = axios.create({
  baseURL: process.env.BASE_URL || 'https://data-driven.azurewebsites.net',
  headers: {
    Accept: 'application/json'
  }
})

AxiosAuthenticated.interceptors.request.use(async (config) => {
  const session = await getSession()
  // @ts-ignore
  const { access_token } = session.user
  // @ts-ignore
  config.headers.Authorization = `Bearer ${access_token}`
  return config
})

AxiosAuthenticated.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/auth/signin'
    }
    return Promise.reject(error)
  }
)

export { AxiosDefault, AxiosAuthenticated }
