import { API_URL } from "./constants";
import Email from "@/models/Email"

export default class EmailApiHandler {
    public static async sendEmail(email: Email): Promise<any> {
        const emailPayload = {
            email: email.email
        };
        console.log("Email payload:", emailPayload);
        try {
            const response = await fetch(`${API_URL}api/v1/email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailPayload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Falha ao enviar email: ${JSON.stringify(errorData)}`);
            }

            return response.json();
        } catch (error) {
            console.error("Ocorreu um erro ao enviar email:", error);
            throw error;
        }
    }
}