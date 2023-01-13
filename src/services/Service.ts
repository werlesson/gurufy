import { AxiosAuthenticated } from './AxiosConfig'

class Service<M> {
  public path = ''

  getById(id: string, params = '') {
    return new Promise((resolve, reject) => {
      AxiosAuthenticated.get(`/${this.path}/${id}?${params}`)
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  }

  get(params = ''): Promise<DataResponse> {
    return new Promise((resolve, reject) => {
      AxiosAuthenticated.get<DataResponse>(`/${this.path}/?${params}`)
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  }

  create(M: M) {
    return new Promise((resolve, reject) => {
      AxiosAuthenticated.post(`/${this.path}`, M)
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  }

  update(M: Partial<M>, id: string) {
    return new Promise((resolve, reject) => {
      AxiosAuthenticated.put(`/${this.path}/${id}`, M)
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => {
          reject(error.response)
        })
    })
  }

  remove(id: string) {
    return new Promise((resolve, reject) => {
      AxiosAuthenticated.delete(`/${this.path}/${id}`)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.response)
        })
    })
  }
}

export { Service }

interface DataResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}
