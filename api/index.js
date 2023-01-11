import axios from 'axios'

const url = "https://api3.markgold.ir/api/admin";


export default {
    get : axios.get,
    post : axios.post,
    url,
    
}