import http from './'


let config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getFactorsSummeryApi = async (data) => {
    try {
        const result = await http.post(`${http.url}/get-factors-summery`, data, config)
        return result
    } catch (e) { return e.response}
}
