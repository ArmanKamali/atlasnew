import axios from 'axios'


const url = "https://www.puzzle.atlasbentglass.com/api";

export default {
    get : axios.get,
    post : axios.post,
    url,
    withCredentials : true,
    
}