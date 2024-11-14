import { AxiosAdapter } from "./adapter/http/axios.adapter";



export const GraciasTotalesFetcher = new AxiosAdapter({
    baseUrl: 'http://192.168.0.103:4000/api/', params: {

        //RECORDAR QUE AL CAMBIAR EL BASEURL LLEVA HTTPS, EN LOCALHOST NO.
    }
})