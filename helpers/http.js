import axios from "axios";

const { NEXT_PUBLIC_BACKEND_URL } = process.env

const http = (token) => {
  console.log(NEXT_PUBLIC_BACKEND_URL)
  console.log(process.env.NEXT_PUBLIC_FRONTEND_URL)
  const headers = {}
  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  return axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_URL,
    headers
  })
}

export default http