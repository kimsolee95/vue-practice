import axios from 'axios'

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options))
  return instance
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`)
//example: 환경변수 설정
//dev port: 5000
//prod port: 5001
