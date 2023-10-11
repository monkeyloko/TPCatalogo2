import { AxiosClient } from "./axiosClient";


export const getProductos = async () => {
    return await AxiosClient.get(`products`)
        .then((response) => {
            return response.data.products;
        }).catch((error) => {
            throw error;
        });
}
export const getProductosByID = async (id) => {
    return await AxiosClient.get(`products/${id}`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
}