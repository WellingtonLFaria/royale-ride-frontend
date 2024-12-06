import Address from "./Address";

export default class CompanyModel {
    public tradeName: string;
    public cnpj: string;
    public email: string;
    public phone: string;
    public password: string;
    public address: Address;

    constructor(tradeName: string, cnpj: string, email: string, phone: string, password: string, address: Address) {
        this.tradeName = tradeName;
        this.cnpj = cnpj;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.address = address;
    }
}