import axios from 'axios'

const url = "https://puzzle.atlasbentglass.com/api";


export default {
    get : axios.get,
    post : axios.post,
    url,
    
}