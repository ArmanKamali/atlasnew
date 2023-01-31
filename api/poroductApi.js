import http from "./";

export const getAllProductsApi = async (token) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const data = await http.get(`${http.url}/admin/get-products`,config);
        console.log(data)
        return data;
    } catch (e) {
        return e.response;
    }
};