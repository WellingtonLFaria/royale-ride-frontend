import { Company } from "@/models";
import { API_URL } from "./constants";

export default class CompanyApiHandler {
    public static async register(company: Company): Promise<void> {
        await fetch(API_URL + "company", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(company),
        });
    }
}

