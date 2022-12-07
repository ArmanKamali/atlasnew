import http from './'


let config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const loginApi = async (user) => {
    try {
        const { status, data } = await http.post(`${http.url}/anbar/login`, user, config)
        if (status === 200)
            return data
        else
            return 'error'
    } catch (e) { console.log(e.response.data) }
}
