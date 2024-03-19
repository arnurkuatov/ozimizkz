import axios from 'axios'

import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from 'axios'

enum StatusCode {
  Forbidden = 403,
  Unauthorized = 401,
}

const headers: Readonly<Record<string, string>> = {
  Accept: 'application/json',
}

class Http {
  private instance: AxiosInstance | null = null

  private onRequestSuccess() {
    return function (config: InternalAxiosRequestConfig) {
      return config
    }
  }

  private onRequestError() {
    return function (error: AxiosError): Promise<AxiosError> {
      return Promise.reject(error)
    }
  }

  private onResponseSuccess() {
    return function (response: AxiosResponse) {
      return response
    }
  }

  private onResponseError() {
    return function (error: AxiosError) {
      const { config, response } = error

      if (!config) {
        return Promise.reject(error)
      }

      if (!response) {
        return Promise.reject({
          ...error.toJSON(),
          response: {
            data: {
              error: {
                message: 'Blocked by CORS policy',
              },
            },
          },
        })
      }

      switch (response.status) {
        case StatusCode.Forbidden: {
          break
        }

        case StatusCode.Unauthorized: {
          break
        }
      }

      return Promise.reject(error)
    }
  }

  private initHttp() {
    const http = axios.create({
      baseURL: 'https://65f9ad1a3909a9a65b191514.mockapi.io/todo-list/v1',
      headers,
    })

    http.interceptors.request.use(
      this.onRequestSuccess(),
      this.onRequestError(),
    )

    http.interceptors.response.use(
      this.onResponseSuccess(),
      this.onResponseError(),
    )

    this.instance = http

    return http
  }

  get axiosInstance(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }
}

const instance = new Http().axiosInstance

export { instance }
