import http from './'


let config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

export const getCategoryApi = async (data) => {
    try {
        const res = await http.get(`${http.url}/get-category`, config)
        return res.data

    } catch (e) { console.log(e.response) }
}

export const getProductsApi = async (data) => {
    try {
        const res = await http.get(`${http.url}/get-products`, data, config)
        return res.data

    } catch (e) { console.log(e.response) }

}
