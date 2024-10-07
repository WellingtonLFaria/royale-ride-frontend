export default class Company {
    public nomeFantasia: string;
    public cnpj: string;
    public razaoSocial: string;
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

    constructor(nomeFantasia: string, cnpj: string, razaoSocial: string, telefone: string, email: string, password: string, logradouro: string, numero: string, complemento: string, bairro: string, cidade: string, estado: string, cep: string) {
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
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
    }
}