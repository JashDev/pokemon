import axios from 'axios'

const finishFunction = (response) => {
    return response
}

const errorFunction = (error) => {
    return Promise.reject(error)
}

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
})

http.interceptors.response.use(finishFunction, errorFunction)

export default http
