import axios from 'axios';


const api = axios.create({
    method: 'GET, POST, PUT, DELETE',
    baseURL: `http://localhost:3005/api/cripto/`,
    headers: {
        'x-apikey': '59a7ad19f5a9fa0808f11931',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});

export const login = async (endPoint) => {
    const data = await api.get(endPoint)
        .then((resp) => resp.data);

    return data;
};

export const creatRegister = async (endPoint, body) => {
    const { data } = await api.post(endPoint, body);

    return data.token;
}

export const getAllUser = async (endPoint, token) => {
    api.defaults.headers.common['Authorization'] = token;
    await api.post(
        endPoint
    );
}

export default api;