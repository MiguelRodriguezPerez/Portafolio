import type { AxiosResponse } from "axios";
import { backendApi } from "./BackendApi";

export const userClickedWorkline = async (): Promise<AxiosResponse<void>> => {
    return await backendApi.get('/userClickedWorkline');
}

export const userClickedWeavile = async (): Promise<AxiosResponse<void>> => {
    return await backendApi.get('/userClickedWeavile');
}