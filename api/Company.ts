import { api_url } from "@/constants/api_url";
import axios from "axios";
import Company from "@/models/Company";

const endpoint = 'companies/';

export default class ModuleCompany {
    public static get = async () => {
        try {
            const response = await axios.get(api_url + endpoint);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar empresas:", error);
            throw error;
        }
    }

    public static post = async (company: Company) => {
        try {
            const response = await axios.post(api_url + endpoint, company);
            return response.data;
        } catch (error) {
            console.error("Erro ao cadastrar empresa:", error.response ? error.response.data : error);
            throw error;
        }
    }
}