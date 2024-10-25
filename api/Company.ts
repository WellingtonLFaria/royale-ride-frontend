import { Company } from "@/models";
import { API_URL } from "./constants";

export default class CompanyApiHandler {
    public static async register(company: Company): Promise<Response> {
        await fetch(API_URL + "api/v1/companies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(company),
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Falha ao cadastrar compania: ${response.json()}`);
            }
            return response;
        }).catch(error => {
            console.error("Ocorreu um erro ao cadastrar compania:", error);
            throw error;
        })
    }
}

