import http from "./";

export const csrfTokenApi = async () => {
    try {
        console.log("Checked Csrf Token...")
        const data = await http.get(`https://www.puzzle.atlasbentglass.com/sanctum/csrf-cookie`);
        return data;
    } catch (e) {
        return e.response;
    }
};

export const loginApi = async (info) => {

    try {
        const data = await http.post(`${http.url}/admin/login`,info);
        console.log(data)
        return data;
    } catch (e) {
      return e.response
    }
};
