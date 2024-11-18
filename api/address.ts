import { api_url } from "@/constants/api_url";
import axios from "axios";
import Address from "@/models/Address";

const endpoint = 'addresses/';

export default class ModuleAddress {
    public static get = async () => {
        try {
            const response = await axios.get(api_url + endpoint);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar endereços:", error);
            throw error;
        }
    }

    public static post = async (address: Address) => {
        try {
            const response = await axios.post(api_url + endpoint, address);
            return response.data;
        } catch (error) {
            console.error("Erro ao cadastrar endereço:", error);
            throw error;
        }
    }
}