import Address from "./Address";
import Email from "./Email";

export default class User {
    public full_name: string;
    public cpf: string;
    public cnh: string;
    public phone: string;
    public email: Email;
    public password: string;
    public address: Address;

    constructor(full_name: string, cpf: string, cnh: string, telefone: string, email: Email, password: string, address: Address) {
        this.full_name = full_name;
        this.cpf = cpf;
        this.cnh = cnh;
        this.phone = telefone;
        this.email = email;
        this.password = password;
        this.address = address;
    }
}