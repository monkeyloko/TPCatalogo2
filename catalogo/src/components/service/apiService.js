import { AxiosClient } from "./axiosClient";


export const getProductos = async () => {
    return AxiosClient.get(`products`)
        .then((response) => {
            return response.products;
        }).catch((error) => {
            throw error;
        });
}