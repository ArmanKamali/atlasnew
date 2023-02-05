import http from "./";

export const getAllProductsApi = async (token) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const { data } = await http.get(`${http.url}/admin/products`, config);
        return data;
    } catch (e) {
        return e.response;
    }
};

export const getGlasses = async (token) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const { data } = await http.get(`${http.url}/admin/get-glasses`, config);
        return data;
    } catch (e) {
        return e.response;
    }
};

export const changeProductElememtApi = async (info) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${info.token}` }
        };
        const { data } = await http.put(`${http.url}/admin/products/${info.id}`, info, config);
        return data;
    } catch (e) {
        return e.response;
    }
};

export const changeProductDetailApi = async (info) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${info.token}` }
        };
        const { data } = await http.put(`${http.url}/admin/detail/${info.id}`, info, config);
        return data;
    } catch (e) {
        return e.response;
    }
};

export const deleteProductDetailApi = async (info) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${info.token}` }
        };
        const { data } = await http.delete(`${http.url}/admin/detail/${info.id}`, config);
        console.log(data)
        return data;
    } catch (e) {
        return e.response;
    }
}

export const AddProductDetailApi = async (info) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${info.token}` }
        };
        const { data } = await http.post(`${http.url}/admin/detail`, info, config);
        console.log(data)
        return data;
    } catch (e) {
        console.log(e)
        return e.response;
    }
};


export const changeProductPhotoApi = async (info,token) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            'content-type' : 'multipart/form-data'
        };
        const { data } = await http.post(`${http.url}/admin/product/change-photo`, info, config);
        console.log(data)
        return data;
    } catch (e) {
        console.log(e)
        return e.response;
    }
};
