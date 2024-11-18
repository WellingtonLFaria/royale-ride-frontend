export default class LoginResponse {
    public type: string;
    public token: string;

    constructor(type: string, token: string) {
        this.token = token;
        this.type = type;
    }
}