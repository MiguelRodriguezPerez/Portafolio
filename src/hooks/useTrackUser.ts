import LZString from "lz-string";
import { useEffect, useRef } from 'react';
import { makeFirstRequest } from '../api/BackendFirstRequest';
import { DeviceType, type BrowserRegister } from '../interfaces/browserRegister.interface';

export const useTrackUser = () => {

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

        cookieStore.set('aea8bde71eb',
            LZString.compressToBase64(
                JSON.stringify(resultado.data)
            )
        );
    }

    const hasFetched = useRef(false);

    useEffect(() => {
        /* Toda esta tontería por el StrictMode */
        if (hasFetched.current) return;
        hasFetched.current = true;

        const getReqCookie = async() => {
            const reqCookie = await cookieStore.get('aea8bde71eb')
            if (!reqCookie) await userLoadedPageFirstTimeRequest();
        }

        getReqCookie();
    },[])
}