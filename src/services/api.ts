import axios from 'axios'

const api = axios.create({
    baseURL: 'https://private-3565ce-plantmanager.apiary-mock.com'
})

export default api;