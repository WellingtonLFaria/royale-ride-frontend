import Address from "./Address";

export default class UserModel {
    public fullName: string;
    public cpf: string;
    public email: string;
    public phone: string;
    public password: string;
    public address: Address;

    constructor(fullName: string, cpf: string, email: string, phone: string, password: string, address: Address) {
        this.fullName = fullName;
        this.cpf = cpf;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.address = address;
    }
}