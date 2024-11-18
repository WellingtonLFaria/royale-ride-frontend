export default class Address {
    public street: string;
    public neighborhood: string;
    public city: string;
    public state: string;
    public number: string; 
    public postal_code: string;
    public additional_info: string;

    constructor(street: string, number: string, neighborhood: string, city: string, state: string, postal_code: string, additional_info: string) {
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.postal_code = postal_code;
        this.additional_info = additional_info;
    }
}