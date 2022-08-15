import axios from 'axios';


const api = axios.create({
    baseURL: `http://localhost:3005/api/cripto/`,
});

export const login = async (endPoint, body) => {
    const data = await api.post(endPoint, body)
        .then((resp) => resp.data);

    return data;
};

export const creatRegister = async (endPoint, body) => {
    const { data } = await api.post(endPoint, body);

    return data.token;
}

export const getAllUser = async (endPoint, token) => {
    api.defaults.headers.common['Authorization'] = token;
    const { data } = await api.get(endPoint);

    return data;
}

export const updateUser = async (endPoint, body, token) => {
    api.defaults.headers.common['Authorization'] = token;
    const { data } = await api.put(endPoint, body);

    return data;
}

export default api;