import http from './'


let config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getAllCategoriesApi = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        const result = await http.get(`${http.url}/admin/categories`, config)
        return result.data
    } catch (e) { return e.response }
}
