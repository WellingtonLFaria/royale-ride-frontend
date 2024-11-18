import { api_url } from "@/constants/api_url";
import axios from "axios";
import User from "@/models/User";

const endpoint = 'users/';
export default class ModuleUser {
    
    public static get = async () => {
        try {
            const response = await axios.get(api_url + endpoint);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw error;
        }
    }

    public static post = async (user: User) => {
        try {
            const response = await axios.post(api_url + endpoint, user);
            return response.data;
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            throw error;
        }
    }
}