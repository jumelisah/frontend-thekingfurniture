import axios from "axios"

// const {BACKEND_URL} = process.env

const http = (token) => {
  const headers = {}
  if(token) {
    headers.Authorization = `Bearer ${token}`
  }
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers
  })
}

export default http