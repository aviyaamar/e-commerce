import axios from 'axios'

const productApi = axios.create({
    baseURL:'https://61c4bbb0f1af4a0017d99775.mockapi.io/'
})
export default productApi