import { AxiosDefault } from './AxiosConfig'

export const signIn = async (username: string, password: string) => {
  return await AxiosDefault.post('/auth', { username, password })
    .then((response) => response.data)
    .catch((error) => error.response.data)
}
