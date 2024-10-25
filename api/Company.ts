import { Company } from "@/models";
import { API_URL } from "./constants";
import EmailApiHandler from "./Email";


export default class CompanyApiHandler {
    public static async register(company: Company): Promise<any> {
        const companyPayload = {
            trade_name: company.tradeName,
            cnpj: company.cnpj,
            name: company.name,
            phone: company.phone,
            email: company.email,
            password: company.password,
        };
        console.log("Company payload:", companyPayload);
        try {
            const response = await fetch(`${API_URL}api/v1/companies`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(companyPayload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Falha ao cadastrar compania: ${JSON.stringify(errorData)}`);
            }

            return response.json();
        } catch (error) {
            console.error("Ocorreu um erro ao cadastrar compania:", error);
            throw error;
        }
    }
}