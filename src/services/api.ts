import axios from 'axios'
import { getHeader } from '../components/Utils'

const api = axios.create({
    baseURL: 'https://minecode.herokuapp.com/github/',
    headers: getHeader()
})

export default api
