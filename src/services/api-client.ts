import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '336f36e801e14efb919856ad84529c4b'
    }
})