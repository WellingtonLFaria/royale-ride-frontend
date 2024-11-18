import axios from "axios";
import Email from "@/models/Email"
import { API_URL } from "./constants";

const endpoint = "api/v1/email";

export default class EmailApiHandler {
    public static async post(email: Email) {
        const email_payload = {
            email: email.email
        };
        try {
            const response = await axios.post(`${API_URL}${endpoint}`, email_payload);
            return { data: response.data, status: response.status };
        } catch (error: any) {
            return { data: error.response.data, status: error.response.status };
        }
    }
}