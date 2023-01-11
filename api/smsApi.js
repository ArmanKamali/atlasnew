import http from './'


let config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getBirthdayDataApi = async (input) => {
    try {
        const data = await http.post(`${http.url}/get-birthday-data`, input, config)
        return data.data
    } catch (e) { return e.response}
}
