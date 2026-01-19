import LZString from "lz-string";
import { useEffect, useRef } from 'react';
import { makeFirstRequest } from '../api/BackendFirstRequest';
import { DeviceType, type BrowserRegister } from '../interfaces/browserRegister.interface';
import Cookies from "universal-cookie";


export const useTrackUser = () => {

    const cookies = new Cookies();

    const getDeviceType = (): DeviceType => {
        const width = window.innerWidth;

        switch (true) {
            case (width > 1400) : return DeviceType.PC;
            case (width > 700) : return DeviceType.TABLET;
            default: return DeviceType.PHONE;
        }
    }

    const generateAndSaveFirstRequest = (): BrowserRegister => {

        const firstRequest: BrowserRegister = {
            id: null,
            dateTimeRequestFirstLoad: new Date(),
            deviceType: getDeviceType(),
            userClickedOnCvButton: false,
            userClickedOnWeavile: false,
            userClickedOnWorkline: false
        }

        return firstRequest;
    }
    
    const userLoadedPageFirstTimeRequest = async() => {
        const resultado = await makeFirstRequest(
            generateAndSaveFirstRequest()
        )

        cookies.set('2c10afa37bf2fac57278a',
            LZString.compressToBase64(
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

    const hasFetched = useRef(false);

    useEffect(() => {
        /* Toda esta tontería por el StrictMode */
        if (hasFetched.current) return;
        hasFetched.current = true;

        const getReqCookie = async() => {
            if (!cookies.get('2c10afa37bf2fac57278a')) await userLoadedPageFirstTimeRequest();
        }

        getReqCookie();
    },[])
}