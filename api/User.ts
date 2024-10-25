import { API_URL } from "./constants";
import { User } from "@/models";

export default class UserApiHandler {
    public static async post(user: User) {
        await fetch(API_URL + "user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(response => {
            if (!response.ok) {
                console.log("Falha ao cadastrar o usuário:", response.json());
                return false;
            }
            return true;
        }).catch(error => {
            console.error('Erro ao cadastrar usuário:', error);
            throw error;
        })
    }
}