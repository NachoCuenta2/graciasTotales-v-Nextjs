import { AxiosAdapter } from "./adapter/http/axios.adapter";



export const GraciasTotalesFetcher = new AxiosAdapter({
    baseUrl: 'https://backend-graciastotales.onrender.com/api/', params: {

        //RECORDAR QUE AL CAMBIAR EL BASEURL LLEVA HTTPS, EN LOCALHOST NO.
    }
})