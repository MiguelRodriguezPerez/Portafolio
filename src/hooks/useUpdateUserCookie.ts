import type { AxiosResponse } from "axios";
import Cookies from "universal-cookie";

export const useUpdateUserCookie = () => {

    const cookies = new Cookies()
 
    const updateCookie = async(func: () => Promise<AxiosResponse<void, any, {}>>) => {
        const resultado = await func();
        if (resultado.status === 200)
            cookies.set('2c10afa37bf2fac57278a',
                btoa(
                    JSON.stringify(resultado.data)
                ), 
                {
                    path: '/',
                    maxAge: 3600 * 24 * 365 * 2,
                    sameSite: 'none',
                    secure: import.meta.env.VITE_SHOULD_COOKIE_BE_SECURE as boolean
                }
            );
    }

    return {
        updateCookie
    }
 
}