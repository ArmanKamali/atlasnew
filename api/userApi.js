import http from './'


let config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const loginApi = async (user) => {
    try {
        const data = await http.post(`${http.url}/admin/login`, user, config)
        return data
    } catch (e) { return e.response}
}
