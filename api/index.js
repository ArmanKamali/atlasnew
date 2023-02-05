import axios from 'axios'


const url = "https://www.puzzle.atlasbentglass.com/api";

export default {
    get : axios.get,
    post : axios.post,
    put : axios.put,
    delete : axios.delete,
    url,
    withCredentials : true,
    
}