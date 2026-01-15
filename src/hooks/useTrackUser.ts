export const useTrackUser = () => {

    const backendUrl: string = import.meta.env.VITE_SERVER_URL as string;

    const userLoadedPageRequest = async(): Promise<void> => {
        fetch(
            backendUrl + '/portafolioEndpoint'
        )
    }
}