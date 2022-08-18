import axios from 'axios';


const api = axios.create({
    baseURL: `https://back-end-cripto.herokuapp.com/api/cripto/`,
});

export const login = async (endPoint, body) => {
    const data = await api.post(endPoint, body)
        .then((resp) => resp.data)
        .catch((err) => err.response.status);

    return data;
};

export const creatRegister = async (endPoint, body) => {
  try {
      const { data } = await api.post(endPoint, body);

    return data;
  } catch (error) {
    return error.response.status;
  }
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