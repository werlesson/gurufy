import { AxiosAuthenticated } from './AxiosConfig'

export const getDashboard = async () => {
  return await AxiosAuthenticated.get('/dashboard/')
    .then((res) => res.data)
    .catch((e) => console.error(e))
}
