export default class User {
    public nomeCompleto: string;
    public cpf: string;
    public cnh: string;
    public telefone: string;
    public email: string;
    public password: string;
    public logradouro: string;
    public numero: string;
    public complemento: string;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public cep: string;
    public receiveNotifications: boolean;

    constructor(nomeCompleto: string, cpf: string, cnh: string, telefone: string, email: string, password: string, logradouro: string, numero: string, complemento: string, bairro: string, cidade: string, estado: string, cep: string, receiveNotifications: boolean) {
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.cnh = cnh;
        this.telefone = telefone;
        this.email = email;
        this.password = password;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.receiveNotifications = receiveNotifications;
    }
}