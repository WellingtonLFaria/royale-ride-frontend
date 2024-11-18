import { api_url } from "@/constants/api_url";
import LoginRequest from "@/models/LoginRequest";
import axios from "axios";

export default class ModuleLogin {
  public static post = async (loginRequest: LoginRequest) => {
    try {
      const response = await axios.post(api_url + "users/auth/", loginRequest);
      return response.data;
    } catch (error) {
      console.error("Erro durante a requisição de login:", error);
      throw error;
    }
  }
}