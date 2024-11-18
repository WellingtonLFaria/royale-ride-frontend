import { api_url } from "@/constants/api_url";
import axios from "axios";
import Vehicle from "@/models/Vehicle";

const endpoint = 'vehicles/';
export default class ModuleVehicle {
    
    public static get = async () => {
        try {
            const response = await axios.get(api_url + endpoint);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar veículos:", error);
            throw error;
        }
    }

    public static post = async (vehicle: Vehicle) => {
        try {
            const response = await axios.post(api_url + endpoint, vehicle);
            return response.data;
        } catch (error) {
            console.error("Erro ao cadastrar veículo:", error);
            throw error;
        }
    }
}