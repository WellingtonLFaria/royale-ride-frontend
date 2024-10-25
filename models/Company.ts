import Email from "./Email";

export default class Company {
    public tradeName: string;
    public cnpj: string;
    public name: string;
    public phone: string;
    public email: Email;
    public password: string;

    constructor(tradeName: string, cnpj: string, name: string, phone: string, email: Email, password: string) {
        this.tradeName = tradeName;
        this.cnpj = cnpj;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
}