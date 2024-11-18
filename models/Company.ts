import Address from "./Address";
import Email from "./Email";

export default class Company {
    public trade_name: string;
    public name: string;
    public cnpj: string;
    public phone: number;
    public email: Email;
    public password: string;
    public address: Address;

    constructor(trade_name: string, cnpj: string, name: string, phone: number, email: Email, password: string, address: Address) {
        this.trade_name = trade_name;
        this.cnpj = cnpj;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.address = address;
    }
}