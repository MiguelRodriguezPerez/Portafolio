import axios, { type AxiosInstance } from "axios";

export const backendApi: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/portafolioEndpoint`,
    headers: {
        "Content-Type": 'application/json'
    },
    withCredentials: true
})