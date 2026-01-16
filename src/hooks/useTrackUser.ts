import LZString from "lz-string";
import { useEffect } from 'react';
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
            id: 0,
            dateTimeRequestFirstLoad: new Date(),
            deviceType: getDeviceType(),
            userClickedOnCvButton: false,
            userClickedOnWeavile: false,
            userClickedOnWorkline: false
        }

        return firstRequest;
    }
    
    const userLoadedPageRequest = async() => {
        const resultado = await makeFirstRequest(
            generateAndSaveFirstRequest()
        )

        localStorage.setItem('userLoadedThisSite',
            LZString.compressToUTF16(
                JSON.stringify(resultado.data)
            )
        );
    }


    useEffect(() => {
        if (!localStorage.getItem('userLoadedThisSite')) userLoadedPageRequest();
    },[])
}