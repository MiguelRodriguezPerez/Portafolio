import { type AxiosResponse } from "axios";
import type { BrowserRegister } from "../interfaces/browserRegister.interface";
import { backendApi } from "./BackendApi";


export const makeFirstRequest = async (request: BrowserRegister): Promise<AxiosResponse<BrowserRegister>> => {    
    const resultado = await backendApi.post(`/effectRequest`, request);
    return resultado;
}